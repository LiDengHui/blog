const loggerMiddleware = (store) => (next) => (action) => {
    console.log(`logInfo: state `, store.getState());
    console.log("logInfo: action type: ", action.type);
    next(action);
    console.log("logInfo: next state", store.getState());
};

export default loggerMiddleware;
