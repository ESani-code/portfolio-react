import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App.tsx'
// import Navbar from './components/Navbar.tsx'
import PillNav from './components/PillNav.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PillNav
        logo="https://res.cloudinary.com/don03rsnm/image/upload/v1758131129/Logo.png"
        logoAlt="Design Labs Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: 'Contact', href: '/contact' }
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#070707"
        pillColor="#ed3838"
        hoveredPillTextColor="#ed3838"
        pillTextColor="#fffff"
        // theme="light"
        initialLoadAnimation={true}
      />
      {/* <Navbar /> */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
