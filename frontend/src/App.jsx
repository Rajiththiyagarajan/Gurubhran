import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CollectionsPage from './pages/CollectionsPage'
import CollectionDetailPage from './pages/CollectionDetailPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import OrderPage from './pages/OrderPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Loader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collections/:slug" element={<CollectionDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
