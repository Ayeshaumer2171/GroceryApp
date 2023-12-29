import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './GrocCards.css'; 
import { BsCart4 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

 export default function GrocCards({ item, increment }) {
  return (
    <div className='col'>
      <Card className='card'>
      <FaHeart  className='heart'/>

        <Card.Img variant='top' src={item.image} alt='kfcCards' className='card-img-top' />
        <Card.Body>
          <Card.Title className='card-title'>{item.title}</Card.Title>
          <Card.Text className='card-text'>{item.desc}</Card.Text>
          <Card.Text className='card-price'>RS: {item.price}</Card.Text>

          <button class="btn  add-to-cart-button" type="button"  onClick={() => increment(item)}>
        Add To Bucket
        <BsCart4 className='cart'/>
   
         </button>

        </Card.Body>

      </Card>
    </div>
  );
}
