import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import Productpage from './pages/Productpage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { TestData } from './TestData'

function App() {

  return (
    <TestData>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path='/oskarshyrbod' element={<Homepage />} />
            <Route path='/product/:productId' element={<Productpage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TestData>
  )
}

export default App
