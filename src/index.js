import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import pizzaData from './data.js';
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

      {pizzaData.length > 0 ?
        <>  <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All
          from our stone oven, all organic, all delicious.
        </p>
          <ul className='pizzas'>
            {pizzaData.map((pizza) => (
              <Pizza {...pizza} key={pizza.name}></Pizza>
            ))}
          </ul>
        </> : <p>We are adding some pizza soon......</p>}
    </main>
  )
}
function Pizza(props) {
  return (
    <div className={`pizza ${props.soldOut? 'sold-out':''}`}>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut?"SOLD OUT":props.price}</span>
      </div>
    </div>
  );
}
function Footer() {
  const nowHour = new Date().getHours();
  const start = 12
  const close = 22
  const isOpen = nowHour >= 12 && nowHour <= 22;
  return (
    <footer className='footer'>
      {isOpen ? (
        <Order start={start} close={close} />
      ) : <p>We are close now </p>}

    </footer>
  )
}
function Order({ start, close }) {
  return (
    <div className='order'>
      <p>We are serving between {start}:00 to {close}:00</p>
      <button className='btn'>Order</button>
    </div>
  )
}
function App() {
  return (
    <div className="container">
      <Heading />
      <Menu />
      <Footer></Footer>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

