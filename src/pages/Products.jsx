import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import uuid4 from "uuid4";
import Cart from '../components/Cart'
import { motion, AnimatePresence } from 'framer-motion';
import {GrChapterNext, GrChapterPrevious} from 'react-icons/gr'
import { MdStar, MdStarOutline, MdStarHalf} from 'react-icons/md'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import {TbVinyl } from 'react-icons/tb'
import styled from 'styled-components';
import Product from '../components/Product';

const Products = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState(null);
  const [productList, setProductList] = useState([]);

  const handlePrevClick = () => {
    setSlideIndex(slideIndex - 1);
  };

  const handleNextClick = () => {
    if (slideIndex >= productList.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const handleAddToCart = () => {
      addToCart(products);
  };

 

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://product-api-production-7dbf.up.railway.app/products")
      const productList = await response.json();
      setProductList(productList);
    }
    fetchProducts();
  }, []);
  return (
    <div className='pagediv'>
 

      <h2 className='hotText'>HOT RIGHT NOW</h2>
      
      <div id='slideshowDIV'> 
  <div className="slideshowNav">
    <button className="ssbtn prev" onClick={handlePrevClick}>
      <IoIosArrowBack size={40} />
    </button>
    <button className="ssbtn next" onClick={handleNextClick}>
      <IoIosArrowForward size={40} />
    </button>
  </div>
  <motion.ul
    className="slideshow"
    initial={{ x: 0 }}
    animate={{ x: `-${slideIndex * 100}vw` }}
    transition={{ type: 'spring', stiffness: 100, damping: 30 }}
  >
    <ul className='slideshowUL'>
      {productList.map((products) =>
        <li className='productListItemSS' key={products._id}> 
          <div className='slideShowItem'>
            <img className='slideShowImage' src={products.image} alt="" />
            <div className='reviewText'>
              <div className='iconContainerSS'>
                <MdStar /><MdStar /><MdStar /><MdStarHalf /> <MdStarOutline />
              </div>
              "THIS is the best album ever, nothing will ever top it!" - GQ
            </div>
          </div>
        </li>
      )}
    </ul>
  </motion.ul>
</div>

      

      <br />

      <ul className='productUL'>
    {productList.map((products) =>
      <li className='productListItem' key={uuid4()}>
        <Link to={"/Product/" + products._id}><img className='bigListImage' src={products.image} alt="" /></Link> 
       <div className='topRowProducts'> <h5 className='albumTitle'>  {products.title}</h5> </div> 
        <h4 className='albumInfo'> {products.description}  {"("}{products.releaseyear}{")"}</h4>
        <div className='bottomRowProducts'>  
       <Button onClick={handleAddToCart} className='cartBtn'>
       <TbVinyl size={30} className='vinylIcon'/> Add to cart 
        </Button>
        <p className='priceTag'> {products.price}:-</p>
        </div>
      </li>
    )}
  </ul>
      
    </div>
  )
}
const Button = styled.button`
  color: white;
  border: 2px solid white;
  background: black;
  font-size: 20px;
  border-radius: 5px;
  max-height: 80px;
  width: 50%;
  margin-left: 25%;   
  margin-bottom: 10px;
  display:flex;
  align-items: center;
`;

export default Products;
