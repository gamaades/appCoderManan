import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBasic from "./components/NavBar/NavBar";
import styles from "./App.module.scss";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from "./components/CartWidget/CartWidget";
function App() {
  return (
    <div className={styles.appContainer}>
      <nav className={styles.navContainer}>
        <NavBarBasic />
        <CartWidget greeting="1" />
      </nav>
      <main className={styles.mainContainer}>
        <ItemListContainer greeting="Bienvenidos a la tienda de Inti" />
      </main>
    </div>
  )
}

export default App
