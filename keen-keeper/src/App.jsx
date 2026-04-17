
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Friends from './components/Friends'
import Footer from './components/Footer'
import Detail from './components/Detail'
import Timeline from './components/Timeline'
import NotFound from './components/NotFound'
import { TimelineProvider } from './context/TimelineContext'

function App() {
  return (
    <TimelineProvider>
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
        <Route
          path="/timeline"
          element={
            <div>
              <Navbar />
              <Timeline />
              <Footer />
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div>
              <Navbar />
              <NotFound />
              <Footer />
            </div>
          }
        />
      </Routes>
      <ToastContainer position="top-right" autoClose={2200} hideProgressBar closeOnClick />
    </TimelineProvider>
  )
}

export default App
