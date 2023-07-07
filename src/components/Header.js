import '../styles/custom.css'
import FullLogoColor from './FullLogoColor'
import Nav from '../components/Nav'

const Header=()=>{
    return(<>
    <header className="headerContainer">
        <FullLogoColor/>
        <Nav/>
    </header>
    </>)
}

export default Header