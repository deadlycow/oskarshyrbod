import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import Productpage from './pages/Productpage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { TestData } from './TestData'
import { CartProvider } from './components/shoppingcart/cartprovider/CartProvider'

function App() {

  return (
    <CartProvider >
      <TestData>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path='/oskarshyrbod' element={<Homepage />} />
              <Route path='/oskarshyrbod/product/:productId' element={<Productpage />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </TestData>
    </CartProvider>
  )
}

export default App
