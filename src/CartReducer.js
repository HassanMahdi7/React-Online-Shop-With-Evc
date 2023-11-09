export const inSt = {
    products : [],
    total : 0,
}

export const CartReducer = (state, action) =>{
    const {type,payload} = action;

    switch(type) {
        case "AddToCart":
            return{
                ...state,
                products : payload.products,
            }
            case "RemoveFromCart":
                return{
                    ...state,
                    products: payload.products,
                };
             case "CalTotal"  :
                return{
                    ...state,
                    total:payload,
                } 
                case "ClearCart" : return inSt;
            default: throw new Error("Invalid Reducer");
    }
}
export default CartReducer;