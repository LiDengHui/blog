import * as React from "react";
import * as Koa from 'koa';
import * as Router from '@koa/router';
import {Provider} from 'react-redux';
import {renderToString,} from "react-dom/server"
import {matchPath, StaticRouter} from "react-router-dom";
import serve from 'koa-static';
import App from '../shared/App';
import routes from '../shared/Routes'
import {createServerStore} from "../shared/store";
import * as path from "path";
import * as fs from "fs";

const app = new Koa();
const router = new Router()

const fileResolve = file => path.resolve(__dirname, file);

const template = fs.readFileSync(fileResolve('assets/index.html'), 'utf8');

function templating(template) {
    return props => template.replace(/<!--(\s\S)*?-->/g, (_, key) => props[key.trim()])
}

router.get(['/home', '/about'], async (ctx, next) => {
    const store = createServerStore();
    const promises = [];
    routes.some(route => {
        const match = matchPath(ctx.request.path, route);
        console.log(match)
        if (match && route.loadData) promises.push(route.loadData(store));
        return match
    })

    await Promise.all(promises).then(data => {
        const html = renderToString((
            <Provider store={store}>
                <StaticRouter location={ctx.req.url}>
                    <App/>
                </StaticRouter>
            </Provider>

        ));
        const render = templating(template);
        ctx.body = render({
            html,
            store: (
                <script>
                    window.REDUX_STORE = {JSON.stringify(store.getState())}
                </script>)

        });

    })

})

router.get('/getData', (ctx) => {
    ctx.body = {
        code: 0,
        message: '',
        data: '后端返回的数据'
    }
})

app.use(serve("assets"))

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})


