import React, { useState } from 'react'
import NavBar from './Header/NavBar'
import Cart from './pages/Cart'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ShowCart from './pages/ShowCart'
import About from './pages/About'
import ShowInSinglePage from './components/ShowInSinglePage'
import { ToastContainer, toast } from 'react-toastify';
import WishList from './pages/WishList'
import SignUp from './login/SignUp'
import Login from './login/Login'
import { useSelector } from 'react-redux'
  

const App = () => {
  const [searchItem, setSearchItem] = useState('');

  const handleSearchChange = (value) => {
    // e.preventDefault()
    setSearchItem(value);
  };
const auth=useSelector((store)=>store.Auth)
let loggin=auth.isLogin;
console.log(loggin);

  return (
    <>
    <BrowserRouter>
    <NavBar onSearchChange={handleSearchChange}/>
    
    <Routes>
     <Route path='/home' element={<Home/>}/>
    
     
     <Route path='/about' element={<About/>}/>
     <Route path='/' element={loggin ?<Cart searchItem={searchItem} />:<Navigate to={"/login"}/>}/>
     <Route path='/singleCart' element={<ShowInSinglePage/>}/>
     <Route path='/show' element={<ShowCart/>}/>
     <Route path='/wishlist' element={loggin ? <WishList/>:<Navigate to={"/sign-up"}/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/sign-up' element={<SignUp/>}/>
     
    </Routes>
    <ToastContainer/>
    </BrowserRouter>
    </>
  )
}

export default App