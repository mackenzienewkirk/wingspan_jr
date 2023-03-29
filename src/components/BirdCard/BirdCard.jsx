import React from 'react';
import { useHistory } from 'react-router-dom';
import './BirdCard.css';

function BirdCard() {
 const history = useHistory();

 return(
  <div className="container">
   <h1>Bird Card</h1>
  </div>
 )
}

export default BirdCard;