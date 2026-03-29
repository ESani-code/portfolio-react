import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App.tsx'
import PillNav from './components/PillNav.tsx'
import SoftAurora from './components/SoftAurora.tsx'

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
      <SoftAurora
        speed={0.3}
        scale={1.3}
        brightness={1.7}
        color1="#ff7575"
        color2="#ff0000"
        noiseFrequency={3}
        noiseAmplitude={3.5}
        bandHeight={0.4}
        bandSpread={2}
        octaveDecay={0.17}
        layerOffset={0.1}
        colorSpeed={0.5}
        enableMouseInteraction
        mouseInfluence={0.1}
      />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
