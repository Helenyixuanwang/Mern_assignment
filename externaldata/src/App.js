import logo from './logo.svg';
import './App.css';
import productData from './products';
import Product from './components/Product';

function App() {

  const productComponents = productData.map(item => <Product  key={ item.id } product={item}/>)
  return (
    <div className="App">
      { productComponents}
    </div>
  );
}

export default App;
