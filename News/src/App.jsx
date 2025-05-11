import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [currentCategory, setCurrentCategory] = useState('general');

  return (
    <div className="app">
      <Header 
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <Routes>
        <Route path="/" element={
          <MainContent 
            currentCategory={currentCategory} 
          />
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
