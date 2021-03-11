const timeMiddleware = (store) => (next) => (action) => {
    console.log(`time:  `, Date.now());
    next(action);
};

export default timeMiddleware;
