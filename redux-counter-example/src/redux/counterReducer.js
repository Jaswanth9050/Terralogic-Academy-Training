import { INCREMENT,DECREMENT,RESET } from "./types";

const initalstate={
    value:0,
}

export default function counterReducer(state=initalstate,action){
    switch(action.type){
        case INCREMENT:
            return{...state,value:state.value+action.payload};
        case DECREMENT:
            return{...state,value:state.value-action.payload};
        case RESET:
            return{...state,value:0};
        default:
            return state;
    }
}