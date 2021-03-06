import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { ArrowLeft } from 'react-feather';


const CartList = ({produitsSelectiones, setProduitsSelectiones}) => {

  const [sum, setSum] = useState()
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const prix = []

  
  
  let directionLien = ''
  if(produitsSelectiones.length === 0) {
    directionLien ='Voir la Tienda'
  }else {
    directionLien = 'Retour vers la Tienda'
  }

  const affichage =() => {
    if(produitsSelectiones.length === 0) {
      return (
        <>
          <p className="paniervide"> Votre panier est vide, n'hésitez pas à aller voir <Link to='/tienda'>la Tienda </Link>  </p>
          <div className="carousel">
            
          </div>
       </>
      ) 
    }else {
      return(
        produitsSelectiones.map((produit, index) => {
        prix.push(produit.prix)
        return (
        <CartItem
          key={index}
          {...produit}
          index={index}
          produitsSelectiones={produitsSelectiones}
          setProduitsSelectiones={setProduitsSelectiones} />)
        }))
    }
  }

  useEffect(() => {
    setSum(prix.reduce(reducer, 0))
    console.log(prix);
  }, [produitsSelectiones])

  
  return (
    <div className="cartlist">
      <h2>Mon panier</h2>
      <div className="listandtotal">
        <div className="list">
          
          {affichage()}
          
        </div>
        {produitsSelectiones.length === 0 ? '' :(
        <div className="total">
          <p>Nombre d'article:<span>{produitsSelectiones.length}</span></p>
          <p>Sous-total:<span>{sum}€</span> </p>
          
          <Link to='/checkout'>Time to pay amigo</Link>
        </div>)}
      </div>
      <Link className="retour" to='/tienda'> <ArrowLeft />{directionLien} </Link>
    </div>
  );
};

export default CartList;