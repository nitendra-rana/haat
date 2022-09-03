import React from 'react'
import styles from './styles.module.css';
import {HeartIcon, ShoppingCartIcon, StarIcon} from '@heroicons/react/24/solid';
import {Link} from 'react-router-dom'
import { useHeader } from '../../Context/HeaderContext';

const CartCard = ({item}) => {
    const {favIds,setFavIds,cartIds,setCartIds,
            setFavTotal,setCartTotal} = useHeader();

    const addToFav=(product_id)=>{
        const array=favIds;
        if(!array.includes(product_id)){
            array.push(product_id);
            setFavIds(array);
            localStorage.setItem("fav",JSON.stringify(array));
            console.log(array);
            setFavTotal(array.length);
        }else{
            const newArray=array.filter(id=>id!==product_id);
            setFavIds(newArray);
            localStorage.setItem("fav",JSON.stringify(newArray));
            console.log(newArray);
            setFavTotal(newArray.length);
        }
    }
    const addToCart=(product_id)=>{
        console.log(product_id);
        const array=cartIds;
        if(!array.includes(product_id)){
            array.push(product_id);
            setCartIds(array);
            localStorage.setItem("cart",JSON.stringify(array));
            const temp=JSON.parse(localStorage.getItem("cart"));
            console.log(temp);
            setCartTotal(array.length);
        }else{
            const newArray=array.filter(id=>id!==product_id);
            setCartIds(newArray);
            localStorage.setItem("cart",JSON.stringify(newArray));
            const temp=JSON.parse(localStorage.getItem("cart"));
            console.log(temp);
            setCartTotal(newArray.length);
        }
    }

  return (
    <div className={styles.card}>
        <div className={styles.cardLink}>
            <button className={styles.favButton}
             onClick={e=>addToFav(item.id)}
             style={
                favIds.includes(item.id)?{color:"red"}:{}
            }
             >
                <HeartIcon/>
            </button>
            <div className={styles.cardHeader}>
                <Link to={`/product/${item.id}`}>
                    <img className={styles.cardImg} src={item.image} alt='productImage'/>
                </Link>
            </div>
            <div className={styles.cardBody}>
                <>
                    <p className={styles.cardTitle}>
                        <span className={styles.brand}>
                            Brand,
                        </span>
                        {item.title}
                    </p>
                </>
                <div className={styles.rating}>
                    {[...Array(Math.round(item.rating.rate))].map((e,i)=>
                        <StarIcon
                        key={`star-${i}`}
                        className={styles.starIcon}
                        aria-hidden='true'/>
                    )}
                    {[...Array(5-Math.round(item.rating.rate))].map((e,i)=>
                        <StarIcon
                        key={`star-${i}`}
                        className={styles.emptyStarIcon}
                        aria-hidden='true'/>
                    )}
                    <p className='text-xs ml-1 font-light mt-0.5'>({item.rating.count})</p>
                </div>
                <div>
                    <div className='my-auto'>
                        <span className='text-xl'>${item.price}</span>
                    </div>
                </div>
                <div className={styles.addToCart}>
                    <button className={styles.addToCartButton}
                    onClick={e=>addToCart(item.id)}
                    style={
                       cartIds.includes(item.id)?{backgroundColor:"red"}:{}
                   }
                   >
                        <ShoppingCartIcon className={styles.shoppingCartIcon}></ShoppingCartIcon>
                        <span className={styles.buttonText}>
                            {cartIds.includes(item.id)?"Remove From Cart":"Add To Cart!"}
                        </span>
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CartCard