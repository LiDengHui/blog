import compose from "./compose.js";

export default function applyMiddleware(...middlewares) {
    return (createStore) => (reducer, initState) => {
        const store = createStore(reducer, initState);

        const simpleState = {
            getState: store.getState,
        };
        const chain = middlewares.map((middleware) => middleware(simpleState));
        const dispatch = compose(...chain)(store.dispatch);

        return {
            ...store,
            dispatch,
        };
    };
}
