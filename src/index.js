import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';     
import pizzaData  from './data.js'; 
function Heading() {
  return (
    <header className='header'>
      <h1>fast react pizza co.</h1>
    </header>
  )
}
function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All
        from our stone oven, all organic, all delicious.
      </p>
      {pizzaData.length > 0?
      <ul className='pizzas'>
        {pizzaData.map((pizza)=>(
          <Pizza {...pizza} key={pizza.name}></Pizza>
        ))}
      </ul>:<p>We are adding some pizza soon......</p>}
    </main>
  )
}
function Pizza(props){
  return (
    <div className='pizza'>
      <img src={props.photoName} alt={props.name} />
      <div>
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price}</span>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="container">
      <Heading />
      <Menu />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

