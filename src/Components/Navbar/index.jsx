import React from 'react'
import { useProduct } from '../../Context/ProductContext'
import styles from './styles.module.css'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const {categories,setCategory} = useProduct();

  return (<>
    <div className='bg-zinc-900/10 mx-auto h-[2px] shadow-sm mt-3'></div>
    <nav className={styles.categoryNav}>
        <>
            <Link to='/' className={styles.categoryLink}>
                <h1 className='truncate capitalize mx-4' onClick={()=>setCategory("")}>All</h1>
            </Link>
        </>
        {
            categories && categories.map((category,index)=>(
                <div key={index}>
                    <Link to={`/${category}`} className={styles.categoryLink}>
                        <h1 className='truncate capitalize mx-4' onClick={()=>setCategory(category)}>{category}</h1>
                    </Link>
                </div>
            ))
        }
    </nav>
    <div className='bg-zinc-900/10 mx-auto h-[2px] shadow-sm'></div>
  </>)
}

export default Navbar