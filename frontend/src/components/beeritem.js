import React from 'react';
import './beeritem.css';

function BeerItem(props) {

  return(
    <div id={ props.beer.id } className="beer"> 
      <h3> { props.beer.name } </h3>
      <div>
      <img src={props.beer.image_url} alt={ props.beer.name } />
      </div>
      <hr />
      <p> { props.beer.description } </p>
      <hr />
      <button className="beer-delete" onClick={ props.deleteBeer }> Delete </button>
    </div>
  )
}

export default BeerItem;