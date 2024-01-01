import { BrowserRouter } from 'react-router-dom';
import { About, Home, Login, Price, Footer, Services, MainServices, Testimonial, Scrollbtn, SignUp, Navbar } from './components'
import './App.css';
import './index.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 font-serif'>
          <div className='min-h-screen bg-gradient-to-r from-orange-400 to-red-700'>
            <Navbar />
            <Home />
          </div>
          <About />

          <div className='bg-[#f7f7f7]'>
            <Services />
          </div>
          <MainServices />
          <Price />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
