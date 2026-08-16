import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img className='h-20' src="https://res.cloudinary.com/don03rsnm/image/upload/v1758131129/Logo.png" alt="Logo" />
            <ul>
                <li>About Me</li>
                <li>Graphics</li>
                <li>Motion Design</li>
                <li>UI Animations</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar