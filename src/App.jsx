import './App.css';


import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer texto = 'NombreDefault' />
    <ItemDetailContainer />
    </>
  );
}

export default App;
