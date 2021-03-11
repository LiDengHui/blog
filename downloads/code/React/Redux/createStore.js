export default function createStore(
    reducer,
    initState,
    rewriteCreateStoreFunc
) {
    let state = initState;
    let listeners = [];

    if (rewriteCreateStoreFunc) {
        const newCreateStore = rewriteCreateStoreFunc(createStore);
        return newCreateStore(reducer, initState);
    }
    function subscribe(listener) {
        listeners.push(listener);
    }

    function getState() {
        return state;
    }

    function changeState(newState) {
        state = newState;
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }

    function dispatch(action) {
        state = reducer(state, action);
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }

    function replaceReducer(nextReducer) {
        reducer = nextReducer;
        dispatch({ type: Symbol() });
    }

    dispatch({ type: Symbol() });

    return {
        subscribe,
        getState,
        changeState,
        dispatch,
        replaceReducer,
    };
}
