
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Friends from './components/Friends'
import Footer from './components/Footer'
import Detail from './components/Detail'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <Stats />
            <Friends />
            <Footer />
          </div>
        }
      />
      <Route
        path="/friend/:id"
        element={
          <div>
            <Navbar />
            <Detail />
            <Footer />
          </div>
        }
      />
    </Routes>
  )
}

export default App
