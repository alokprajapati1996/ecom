
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from "react-icons/rx";
import { addToCart, removeToWishList } from '../features/CardSlice';
import { Link } from 'react-router-dom';

const WishList = () => {
    const wStore=useSelector((store)=>store.wishlist)

    console.log(wStore);
    let dispatch=useDispatch()
    
  return (
    <>
    
   {wStore.WishList.length>0 ?(<div className="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-4xl max-w-xl">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-10">Selected items</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
    {
    wStore.WishList.map((ele)=>{
   return <div className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
      <div className="bg-white flex flex-col h-full">
     
        <div className="w-full">
        <div className='mx-60 border-2  bg-pink-300 rounded-3xl my-2 absolute'> <button onClick={()=>dispatch(removeToWishList(ele))}><RxCross2/></button>  </div> 
          <img src={ele.thumbnail} alt="food1" className="  aspect-[139/125] w-full object-cover" /></div>
        <div className="p-4 text-center flex-1">
          <h4 className="text-sm sm:text-base font-bold text-gray-800">{ele.title}</h4>
          <h4 className="text-sm sm:text-base text-gray-800 font-bold mt-2">$22 <strike className="text-gray-500 ml-1">${ele.price}</strike></h4>
        </div>
        <button type="button" className="bg-gray-700 font-semibold hover:bg-gray-800
         text-white text-sm px-2 py-2 w-full "onClick={()=>dispatch(addToCart(ele))}>Add to Cart</button>
      </div>
    </div>
    })
}
  </div>
</div>):
(
<>
<div className='text-center  '>
<div className='font-bold font-sans text-2xl mt-2'><h1>Your Wishlist is Empty</h1>
<p>save items that you like in your Wishlist</p></div>
<div className='w-96 mx-auto'>
  <img src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg" alt="" />
  <Link to={"/"} className='bg-blue-800 px-4 py-1 rounded-md text-white text-lg'>Start Shopping</Link>
  </div>

</div>
</>
)

}
</>
  )
}

export default WishList