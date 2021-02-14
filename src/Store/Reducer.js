const initailState = { message: "Subscribe to Protiviti" }

const reducer = (state = initailState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case "Message Change": newState.message = "Thank you Protiviti."; break;
        default: console.log("Hello");
    }
    return newState;
} 

export default reducer;