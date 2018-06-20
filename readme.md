# 1. Setup the fake backend with JSON server
- mkdir backend
- npm init -y
- npm add json-server
- add npm scripts: start: json-server --watch db.json"
- create db.json
- We copied some JSON data about beers from this API: https://api.punkapi.com/v2/beers into db.json
- npm start
- localhost:3000 now has your fake backend about beers

# 2. Setup the frontend with create-react-app
- You can use yarn or npx
- npx create-react-app frontend OR yarn create-react-app frontend (I stuck with yarn)
- Using React, try to do create a page that does these things
    - Display beers from the backend
        - // feed state to the render
        - // fetch all the beers from api
        - // fetch data in state
        - // feed state to render
    - Create a delete button to delete beers
    - Create a form to add beers

## Solutions - There were multiple ways of doing this:
- [Ruegen's way](https://github.com/Ruegen/beer-web)
- My code in this repo
- Eryk's repo ( He's got edit working too )
- Mark did it differntly too, but it is not on github yet.

## Some tidbits of learning 
- In a react app, fetch data with componentdidmount - https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/

- There are multiple ways to create a stateless component
```
// arrow function in a variable
const BeerCard = ({id, name, image_url, description}) => {
    return <div key={id} className="card">
          <div className="card-title">
            <h2>{name}</h2>
          </div>
          <div className="card-body">
            <img src={image_url} alt={name}/>
            <p>{description}</p>
          </div>
        </div>
}

// first class function
function BeerCard(props) {
      return <div key={props.id} className="card">
          <div className="card-title">
            <h2>{props.name}</h2>
          </div>
          <div className="card-body">
            <img src={props.image_url} alt={props.name}/>
            <p>{props.description}</p>
          </div>
        </div>
}

// anonymous function in a variable
const BeerCard = function(props) {
       return <div key={props.id} className="card">
          <div className="card-title">
            <h2>{props.name}</h2>
          </div>
          <div className="card-body">
            <img src={props.image_url} alt={props.name}/>
            <p>{props.description}</p>
          </div>
        </div> 
}
```