import Cart from '../components/cart';
import styles from '../styles/Home.module.css';
import axios from "axios";
import React from "react";


const products = ({ products, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <>
    <h1 className={styles.menutitle}>Menu</h1>
    <div >
      <ul className={styles.menu}>
      {products.length > 0 &&
        products?.map((products) => <li key={products.id} className={styles.prodcss}> {products.attributes.title}   ${products.attributes.price}<br></br> {products.attributes.description} 
       </li>)}
    
        </ul>
             
    <Cart />
    </div>
    </>
  );
};


products.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get("http://localhost:1337/api/products");
    const products = res.data.data;
    return { products };
  } catch (error) {
    return { error };
  }
};

export default products;