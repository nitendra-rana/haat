import React from 'react'
import CartCard from '../../Components/CartCard';
import Loader from '../../Components/Loader';
import { useHeader } from '../../Context/HeaderContext'
import { useProduct } from '../../Context/ProductContext';
import styles from './styles.module.css';

const Cart = () => {
    const {cartIds}=useHeader();
    const {loading,productList}=useProduct();
    const products=productList.filter((item)=>cartIds.includes(item.id));
    const costs=products.map((item)=>item.price);
    const sum=costs.reduce((num1,num2)=>num1+num2,0);

    const chechOut=()=>alert("Payment Successful,Thank You for Ordering"+"\n"+"Have a Nice Day 😊");

  return (
    <div className={styles.main}>
        <div className={styles.cardGroup}>
        {
            !loading?(
                products.map((item)=>{
                    return(
                        <CartCard item={item} key={item.id}/>
                    )
                })
            ):<Loader/>
        }
        </div>
        <div className={styles.payment}>
            <div className={styles.paymentCard}>
                <h1 className='text-4xl mb-3 underline'>Order Summary</h1>
                <div className='flex text-2xl'><span>Price: </span><span className='ml-auto'>${(sum*0.95).toFixed(2)}</span></div>
                <div className='flex text-lg'><span>Tax: </span><span className='ml-auto'>${(sum*0.1).toFixed(2)}</span></div>
                <div className='flex text-lg'><span>Discount: </span><span className='ml-auto'>${(sum*0.05).toFixed(2)}</span></div>
                <div className='flex text-3xl mt-3'><span>Final price: </span><span className='ml-auto'>${(sum).toFixed(2)}</span></div>
                <button className={styles.paymentButton} onClick={chechOut}>CheckOut</button>
            </div>
        </div>
    </div>
  )
}

export default Cart