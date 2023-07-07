import {Link} from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
    return (<>
        <footer className="footer">
            <img  className='footer-logo' src="/images/logo.png" alt="little lemon logo" />
            <div className="doormant">
                <h2 className='footer-title'>Doormant Navigation</h2>
                <nav className='footer-nav'>
                    <ul>
                        <li>
                            <Link>Home</Link>
                        </li>
                        <li><Link>About</Link></li>
                        <li><Link>Menu</Link></li>
                        <li><Link to='/reserve'>Reservations</Link></li>
                        <li><Link>Order Online</Link></li>
                        <li><Link>Login</Link></li>
                        
                    </ul>
                </nav>
            </div>
            <div className="contact">
                <h2 className='footer-title'>Contact</h2>
                <nav className='footer-nav'>
                    <ul>
                        <li><Link>Phone number</Link></li>
                        <li><Link>Address</Link></li>
                        <li><Link>Email</Link></li>
                        
                    </ul>
                </nav>
            </div>
            <div className="social">
                <h2 className='footer-title'>Social Media Links</h2>
                <nav className='footer-nav'>
                    <ul>
                        <li><Link>Facebook</Link></li>
                        <li><Link>Instagram</Link></li>
                        <li><Link>Twitter</Link></li>
                        
                    </ul>
                </nav>
            </div>

        </footer>
    </>)
}

export default Footer