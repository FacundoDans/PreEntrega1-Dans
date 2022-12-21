import './App.css';


import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer texto = 'NombreDefault' />
    </>
  );
}

export default App;
