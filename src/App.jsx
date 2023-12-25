import { BrowserRouter } from 'react-router-dom';
import { About, Home, Login, Price, Footer, Services, Testimonial, Scrollbtn, SignUp, Navbar } from './components'
import './App.css';
import './index.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 bg- font-serif'>
          <div className='min-h-screen bg-gradient-to-r from-orange-400 to-red-700'>
            <Navbar />
            <Home />
          </div>
          <About />
          <Services />
          <Price />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
