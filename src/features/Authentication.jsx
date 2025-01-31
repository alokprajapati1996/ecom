import { createSlice } from '@reduxjs/toolkit'

let details=JSON.parse(localStorage.getItem('ecomLogin'))
const initialState = {
  isLogin:details?true:false,
  email:details?details.email:""
}

export const Authentication = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLoggin: (state,action) => {
      state.isLogin=true,
      state.email=action.payload.email
    },
    setLogout:(state)=>{
      state.isLogin=false,
       localStorage.removeItem("ecomLogin")
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLoggin, setLogout, incrementByAmount } = Authentication.actions

export default Authentication.reducer