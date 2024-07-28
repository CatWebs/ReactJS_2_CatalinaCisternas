import Header from './componets/Header/Header'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import Footer from './componets/Footer/Footer'
import "./main-styles.css"

function App() {

  return (
    <>
     <Header />
     <ItemListContainer greeting="Hilados Arañitas" />
     <Footer/>
    </>
  )
}

export default App
