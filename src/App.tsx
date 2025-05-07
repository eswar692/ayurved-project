import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './conponents/page/home/Home'
import About from './conponents/page/about/About'
import Services from './conponents/page/services/Services'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App