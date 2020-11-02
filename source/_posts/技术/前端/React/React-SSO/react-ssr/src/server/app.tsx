const Koa = require('koa')
const app = new Koa();
const Router = require('@koa/router')
const serve = require('koa-static');

const router = new Router()

router.get('/', (ctx, next) => {
    ctx.body = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                Hello Word
                <div id="root"></div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
})

app.use(serve("dist"))

app.use(router.routes()).use(router.allowedMethods());

app.use((ctx) => {

})

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})


