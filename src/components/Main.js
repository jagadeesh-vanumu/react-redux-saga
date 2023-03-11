
import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch, useSelector } from 'react-redux';
import { productList } from "../redux/productAction";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector(state => state.productData)
  const product = {
    name: 'i phone',
    category: 'mobile',
    price: 10000,
    color: 'red'
  }
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <div>
        <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div> 
      <div>
        <button onClick={() => dispatch(productList(data))}>Call Product List</button>
      </div>   
    </div>
  );
}

export default Main;