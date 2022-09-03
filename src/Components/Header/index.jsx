import React from 'react'
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { useHeader } from '../../Context/HeaderContext';
import styles from './styles.module.css';
import logo from './logo.png';
import { useProduct } from '../../Context/ProductContext';

const Header = () => {
    const {favIds,cartIds,favTotal,cartTotal}=useHeader();
    const {setCategory}=useProduct();

  return (
    <div className='flex'>
        <Link to='/'className=''>
            <img className='w-25 h-10 m-5' alt='' src={logo} onClick={()=>setCategory("")}></img>
        </Link>
        
        <Link to='/fav' className='block mt-4 ml-auto mr-6'>
            <div className='relative block'>
                <button className={styles.favButton}>
                    <HeartIcon/>
                </button>
                {favTotal>0?<div className={styles.favNum}>{favIds.length}</div>:<></>}
            </div>
        </Link>
        <Link to='/cart' className='block mt-3'>
            <div className='relative block'>
                <button className={styles.cartButton}>
                    <ShoppingCartIcon/>
                </button>
                {cartTotal>0?<div className={styles.cartNum}>{cartIds.length}</div>:<></>}
            </div>
        </Link>
    </div>
  )
}

export default Header