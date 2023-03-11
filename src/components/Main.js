
import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch, useSelector } from 'react-redux';
import { productList } from "../redux/productAction";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector(state => state.productData)
  console.warn("main product data", data)


  useEffect(()=> {
    dispatch(productList())
  },[])

  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div> 
      <div className="product-container">
        {
          data.map(item => (
            <div className="product-item">
              <img src={item.photo} alt={item.name}/>
              <div>Name: {item.name}</div>
              <div>Color: {item.color}</div>
              <div>Price: {item.price}</div> 
              <div>Category: {item.category}</div> 
              <div>Brand: {item.brand} </div>
              <div>
              <button onClick={() => dispatch(addToCart(item))}>Add to Cart </button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove from Cart</button>
              </div>
            </div>
          ))
        }
      </div> 
    </div>
  );
}

export default Main;