const loginreducer={
    item:[],
    log:"laile"
}
const item=(state=loginreducer,action)=>{
    switch(action.type){
        case "LOGIN_GO":
            return [...state]
        default:
            return [...state]
    }
}

export default (state=loginreducer,action)=>{
    return {
        item:item(state.item,action),
        log:state.log
    }
}