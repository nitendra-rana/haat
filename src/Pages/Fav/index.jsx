import React from 'react'
import Card from '../../Components/Card';
import Loader from '../../Components/Loader';
import { useHeader } from '../../Context/HeaderContext'
import { useProduct } from '../../Context/ProductContext';
import styles from './styles.module.css';

const Fav = () => {
    const {favIds}=useHeader();
    const {loading,productList}=useProduct();
    const products=productList.filter((item)=>favIds.includes(item.id));

  return (
    <div className={styles.cardGroup}>
        {
            !loading?(
                products.map((item)=>{
                    return(
                        <Card item={item} key={item.id}/>
                    )
                })
            ):<Loader/>
        }
    </div>
  )
}

export default Fav