const exceptionMiddleware = (store) => (next) => (action) => {
    try {
        next(action);
    } catch (e) {
        console.error(e);
    }
};

export default exceptionMiddleware;
