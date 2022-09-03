import React from 'react'
import Card from '../../Components/Card';
import Loader from '../../Components/Loader';
import { useProduct } from '../../Context/ProductContext';
import styles from './styles.module.css';

const Products = () => {

    const {productList,loading}=useProduct();

  return (
    <div className={styles.cardGroup}>
        {
            !loading?(
                productList.map((item)=>{
                    return(
                        <Card item={item} key={item.id}/>
                    )
                })
            ):<Loader/>
        }
    </div>
  )
}

export default Products