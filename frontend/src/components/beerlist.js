import React from 'react';
import BeerItem from './beeritem.js';
import './beerlist.css';

function BeerList(props) {
  const beerElements = props.beers.map( b => <BeerItem beer={b} key={b.id} deleteBeer={() => props.deleteBeer(b.id) }/> )
  return (
    <div className="beerlist">
      { beerElements }
    </div>
  )
}

export default BeerList;