
import './App.css';
import Milista from '../list/Milista';
import Footer from '../footer/Footer';
import Header from '../header/Header';
function App() {
  return (
    <>
      <Header/>
        <h2>Mi aplicación</h2>
        <div className="Parrafo">
          <p>Esta aplicación muestra el contenido almacenado de mi app:</p>
        </div>
        <Milista/>
        <Footer/>
    </>
  );
}

export default App;
