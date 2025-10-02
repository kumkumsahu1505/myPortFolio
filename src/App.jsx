import './App.css'
import ScrollTop from './Component/ScrollTop'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router'
import Footer from './Component/Footer'
function App() {

  return (
    <>
      <ScrollTop/>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>

  )
}

export default App
