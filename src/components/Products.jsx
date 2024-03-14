import React, { useEffect, useReducer, useState } from "react";
import "./product.css";

const initialState = 0;
const reducer = (state,action)=>{
  console.log(state,action)
  if (action.type==='INCREMENT'){[
    state.push(action.payload)
  ]}
  return state;
}

const Products = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
  const [product, setProduct] = useState([]);
  const [store, setStore] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProduct(data);
    };
    fetchProducts();
  }, []);

  // const handleAdd = (index) => {
  //   //  addstore({image:product.image,title:product.title,price:product.price})
  //   //  console.log(addstore);
  //   // const container = product.push((item, i) => i === product);
  //   // const container = product.push(product.id);
  //   const container = setProduct([...product,{...index}])
  //   console.log(container);
  // };
  // const addstore = (itemData) => {
  //   // setStore(prevItems => [...prevItems, itemData]);
  //   setStore((prevItems) => []);
  // };
  return (
    <>
      <div className="product-wraper pro-container">
        <ul>
          {product.map((product) => (
            <li className="pro-li">
              <div className="card pro-card" key={product.id}>
                <img
                  className="card-img-top"
                  src={product.image}
                  style={{
                    width: "150px",
                    height: "150px",
                    marginLeft: "7rem",
                    marginTop: "1rem",
                  }}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <h4>{product.price}</h4>
                  <botton className="btn" onClick={() => dispatch({type:"INCREMENT"})}>
                    Add to Cart
                  </botton>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Products;
