
import { useEffect, useState } from 'react';
import { Trash } from 'react-feather';
import { Link } from 'react-router-dom';


const CartItem = ({
        _id,
        titre,
        prix,
        image,
        index,
        miniImage,
        produitsSelectiones,
        setProduitsSelectiones,
  }) => {

    const [ images, setImages ] = useState()



  const filteredProduit = (i) => {
    let newArray = produitsSelectiones.filter((item, index) => index !== i )
    setProduitsSelectiones(newArray)
    localStorage.setItem('data',JSON.stringify(newArray))
    return newArray
  }

 

  const time = () => {
    const first = setTimeout(() => {
      setImages(miniImage.first)
    },3000)
    return first
  }

  useEffect(() => {
    setImages(image)
  }, [])



  return (
    <div className="cartitem">
      <div className='picture'>
        <img src={images} alt="" ></img>
      </div>
      
      <Link to={`/produit/${_id}`}>{titre}</Link>
      <p>{prix}€</p>
      <Trash id={_id} onClick={() =>{ 
        
        filteredProduit(index)} }/>
    </div>
  );
};

export default CartItem;