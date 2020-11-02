import Home from "./Home";
import About from "./About";
import {RouteConfig} from "react-router-config";

const routes: RouteConfig[] = [
    {
        path: '/home',
        isExact: true,
        component: Home,
    }, {
        path: '/about',
        component: About as any,
        isExact: true,
        loadData: (store) => About.loadData(store)
    }
]

export default routes;