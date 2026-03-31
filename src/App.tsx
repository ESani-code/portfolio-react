import { BrowserRouter } from 'react-router-dom'
import PillNav from './components/PillNav.tsx'
import SoftAurora from './components/SoftAurora.tsx'
import BlurText from './components/BlurText.tsx'
import TextType from './components/TextType.tsx'
import './styles/App.css'

const App = () => {


  return (
    <>
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



      <section className='herotext min-h-screen flex flex-col justify-center items-center text-center px-4'>

      <BlurText
        text="Hi, I'm Sani Eneojo Emmanuel"
        delay={300}
        animateBy="words"
        direction="top"
        // onAnimationComplete={handleAnimationComplete}
        className="text-5xl md:text-7xl lg:text-8xl mb-6 font-bold text-accent-color text-center justify-center"
      />



      <div className='text-2xl md:text-3xl lg:text-4xl font-medium'>
        I am a  
        <TextType 
        text={[" Front-end Developer", " Graphic Designer", " Motion Designer", " Media Enthusiast"]}
        typingSpeed={50}
        pauseDuration={2400}
        showCursor
        cursorCharacter="|"
        // texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
        deletingSpeed={50}
        // variableSpeedEnabled={false}
        // variableSpeedMin={60}
        // variableSpeedMax={80}
        cursorBlinkDuration={0.5}
        className="text-accent-color"
        />
      </div>


      </section>




      


      <SoftAurora
        speed={0.3}
        scale={1.3}
        brightness={0.4}
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
    </BrowserRouter>
    </>
  )
}

export default App