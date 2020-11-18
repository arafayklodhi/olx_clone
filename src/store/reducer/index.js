const INITIAL_STATE = {
    name : "rafay",
    email : "rafay@gmaui.com"
}
export default (state = INITIAL_STATE,action)=>{
    console.log("action===>",action)
    switch (action.type){
        case "SETDATA":
            return({
                ...state,
                name: action.data
            })
    }
    return state;
}