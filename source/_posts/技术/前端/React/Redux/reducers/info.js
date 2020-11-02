let initState = {
    name: "张三",
    description: "年薪百万",
};

export default function reducer(state, action) {
    if (!state) {
        state = initState;
    }
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.name,
            };
        case "SET_DESCRIPTION":
            return {
                ...state,
                description: action.description,
            };
        default:
            return state;
    }
}
