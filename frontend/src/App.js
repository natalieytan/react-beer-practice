import React, { Component } from 'react';
import './App.css';
import BeerList from './components/beerlist';
import BeerForm from './components/beerform';
// feed state to the render

// fetch all the beers from api

// fetch data in state

// feed state to render

class App extends Component {
  state = {
    beers: null
  }
  
  deleteBeer = (id) => { 
    const beerURL = `http://localhost:3000/beers/${id}`
    fetch(beerURL, { method: 'DELETE' })
      .then(res => res.json())
      .then( () =>     
        this.setState (prevState => {
          const beers = prevState.beers.filter(beer => beer.id !== id);
          return { beers };
        })
      )
  }

  addBeer = (beer) => {
    const images = ["https://images.punkapi.com/v2/keg.png", 
    "https://images.punkapi.com/v2/2.png", 
    "https://images.punkapi.com/v2/5.png", 
    "https://images.punkapi.com/v2/6.png",
    "https://images.punkapi.com/v2/7.png",
    "https://images.punkapi.com/v2/9.png"
    ]
    const beerURL = "http://localhost:3000/beers/"
    beer.image_url = images[Math.floor(6*Math.random())];
    beer.id = this.state.beers[this.state.beers.length-1].id + 1;
    fetch(beerURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(beer)
      })
      .then(res => res.json())
      .then( () => {
        this.setState(prevState => {
          const beers  = prevState.beers.concat(beer);
          return { beers };
        });
      })
  }

  componentDidMount() {
    const beerURL = 'http://localhost:3000/beers';
    fetch(beerURL)
      .then(response => response.json())
      .then(
        beersData => {
          const beers = beersData.map((beer) => {
            return {
              name: beer.name,
              description: beer.description,
              id: beer.id,
              image_url: beer.image_url
            }
          })
          this.setState( { beers })
        }
      )
      .catch(err => console.error(err))
  }

  render() {
    if(this.state.beers) {
      return (
        <div className="App">
          <header className="App-header">
            <p> <span role="img" aria-label="beer">🍺  </span> </p>
            <h1 className="App-title">Welcome to Beer </h1>
          </header>
          <BeerForm addBeer={ this.addBeer } />
          <BeerList beers={ this.state.beers } deleteBeer={ this.deleteBeer } />
        </div>
      );
    }

    return <div>Loading beers</div>
  }
}

export default App;
