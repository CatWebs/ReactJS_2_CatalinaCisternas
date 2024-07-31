import Header from './componets/Header/Header'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'
import Footer from './componets/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NoPage from './componets/NoPage'

function App() {

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}>
        
          <Route exact path='/categoria/:idCategoria' element={<ItemListContainer/>}/>

          <Route exact path='/detalles/:idProducto' element={<ItemDetailContainer/>}/>

          <Route path='*' element={<NoPage/>}/>
          
        </Route>

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
