import { createSlice, current } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basketItems: [],
        checkBasketIsOpen: false,
        totalPrice : 0
    },
    reducers: {
      addBasket : (state, action) => {
        action.payload.count = 1;
        if(state.basketItems.length == 0){
            state.basketItems.push(action.payload)
        }else{
            state.basketItems.forEach((item)=>{
                if(item.name===action.payload.name){
                    item.count += 1;
                }else if(!state.basketItems.find(item=>item.name===action.payload.name)){
                    state.basketItems.push(action.payload)
                }
             }) 
            
        }
      },
      toggleBasket : (state, action) => {
        state.checkBasketIsOpen = !state.checkBasketIsOpen
      },
      openBasket: (state, action) => {
        state.checkBasketIsOpen = true
      },
      increaseQuantity: (state,action) => {
        state.basketItems.map(item=>{
            if(item.name === action.payload.name){
                item.count += 1;
            }
        })
      },
      decreaseQuantity: (state, action) => {
        state.basketItems.map(item=>{
            if(item.name === action.payload.name){
                if(item.count>0){
                   item.count - 1 === 0 ? state.basketItems.pop(action.payload) : item.count -= 1  
                }
            }
        })
      },
      calculateBasket : (state, action) => {
        let total = 0;
        
        state.basketItems.forEach(item=>{
            total = total + item.price*item.count
        })
        state.totalPrice = Number(total.toFixed(2));
      }

    },
    extraReducers: {
     
    }
})

export const { addBasket, toggleBasket, openBasket, increaseQuantity, decreaseQuantity, calculateBasket } = basketSlice.actions

export default basketSlice.reducer;