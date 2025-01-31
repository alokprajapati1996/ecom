import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
  cart: [],
  WishList:[]
};

// console.log(initialState.cart)

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart:(state,action) => {
      const obj={...action.payload}
      let existingItem=state.cart.find((ele)=>ele.id===action.payload.id)
      if(existingItem) {
       // console.log("no")
        toast.warning("item allready added!",{position:"top-right"})
      } 
      else {
        // Add the new item to the cart
        obj.quantity=1;
            state.cart.push(obj);
           toast.success("item added!",{position:"top-left"})

    
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
   incrementCardItem:(state,action)=>{
    let obj={...action.payload}
    obj.price=obj.price+obj.price/obj.quantity;
    obj.quantity +=1;
    let index=state.cart.findIndex((ele)=>ele.id===obj.id)
    state.cart[index]=obj
     },
     decrementCardItem:(state,action)=>{
      let obj={...action.payload}
      obj.price=obj.price-obj.price/obj.quantity;
      if(obj.quantity<=1){
        return
      }
      obj.quantity -=1;
      let index=state.cart.findIndex((ele)=>ele.id===obj.id)
      state.cart[index]=obj
       },
       addToWishList:(state,action)=>{
        let existingItem=state.WishList.find((ele)=>ele.id===action.payload.id)
        if(existingItem){
          toast.warning("item allready added!",{position:"top-right"})
        }else{
        state.WishList.push(action.payload)
        toast.success("item added to wishlist!",{position:"top-left"})
        }
       },
        removeToWishList:(state,action)=>{
            
          state.WishList = state.WishList.filter((item) => item.id !== action.payload.id);
          },
        
  
    
  },
});

export const { addToCart,incrementCardItem,decrementCardItem,removeFromCart,addToWishList,removeToWishList} = cartSlice.actions;

export default cartSlice.reducer;
