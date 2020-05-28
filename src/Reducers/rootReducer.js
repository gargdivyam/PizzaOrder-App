import { ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, SUB_QUANTITY, EMPTY_CART } from "../Actions/action";

const initState = {
    products: [
        {
            id: 0,
            name: "Veg pizza",
            price: 5,
            quantity: 0,
            image: "./image/my-vegpizza.jpg" 
        },
        {
            id: 1,
            name: "Paneer Vegie",
            price: 8,
            quantity: 0 ,
            image: "/image/Panner_Veggie-1.jpg"

        },
        {
            id: 2,
            name: "Deluxe Corn",
            price: 8.85,
            quantity: 0 ,
            image: "/image/deluxCorn.jpg"

        },
        {
            id: 3,
            name: "Paneer Makhni Pizza",
            price: 10,
            quantity: 0,
            image: "/image/Paneer_Makhni-1.jpg"

        },
        {
            id: 4,
            name: "Paneer Onion Pizza",
            price: 7.90,
            quantity: 0,
            image: "/image/pannerOnion.jpg"

        },
        {
            id: 5,
            name: "Veg Overloaded Pizza",
            price: 11,
            quantity: 0,
            image: "/image/Vegoverloaded.jpg"

        },
        {
            id: 6,
            name: "Double Cheese Margherita",
            price: 6.80,
            quantity: 0,
            image: "/image/Double_Cheese_Margherita.jpg"

        },
        {
            id: 7,
            name: "Chicken Overloaded",
            price: 12.75,
            quantity: 0,
            image: "/image/Chickenoverloaded.png"

        },
        {
            id: 8,
            name: "Pan Pizza",
            price: 11.5,
            quantity: 0,
            image: "/image/PanPizza1.jpg"

        }
    ]
}

 const rootReducer = (state = initState, action) =>{
    switch (action.type) {
        case ADD_TO_CART:
          return {
            ...state,
            products: state.products.map(product =>
              product.id === action.id ? {...product, quantity: 1} : product,
            ),
          };
        case REMOVE_FROM_CART:
          return {
            ...state,
            products: state.products.map(product =>
              //product.id === action.id
                {return {...product, quantity: 0}}
                
            ),
          };
        case ADD_QUANTITY:
          return {
            ...state,
            products: state.products.map(product =>
              product.id === action.id
                ? {...product, quantity: product.quantity + 1}
                : product,
            ),
          };
        case SUB_QUANTITY:
          return {
            ...state,
            products: state.products.map(product =>
              product.id === action.id
                ? {
                    ...product,
                    quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
                  }
                : product,
            ),
          };
        case EMPTY_CART:
          return {
            ...state,
            products: state.products.map(product =>
                {return{ ...product, quantity: 0}}
            ),
          };
        default:
          return state;
}
}

export default rootReducer;