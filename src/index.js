import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';     
import pizzaData  from './data.js'; 
console.log([...pizzaData])
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
      <ul>
        {pizzaData.map((pizza)=>[
          <li key={pizza.name}>
            <div>
            <img src={pizza.photoName} alt={pizza.name} />
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
            <span>{pizza.price}</span>
            </div>
          </li>
        ])}
      </ul>
    </main>
  )
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

