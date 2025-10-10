
import './App.css';
import Milista from '../list/Milista';
import Footer from '../footer/Footer';
import Header from '../header/Header';
function App() {
  return (
    <div>
      <Header/>
      <h1>Hola Mundo </h1>
        <h2>Este es mi primer componente React</h2>
        <div className="Parrafo">
          <p>Bienvenido a mi aplicación, esto fue creado con JavaScript en React</p>
        </div>
        <Milista titulo="Personas1" nombre1="Xurde" nombre2="Illán" nombre3="Vicente" nombre4="Sonia"/>
        <Milista titulo="Personas2" nombre1="Xurde" nombre2="Illán" nombre3="Vicente" nombre4="Sonia"/>
        <Milista titulo="Personas3" nombre1="Xurde" nombre2="Illán" nombre3="Vicente" nombre4="Sonia"/>
        <Footer/>
    </div>
  );
}

export default App;
