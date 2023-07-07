import "../styles/hero.css"
import { useNavigate } from "react-router-dom"

const Hero=()=>{
    const navigate=useNavigate();

    function toReserve(){
        navigate("/reserve");
    }

    return(
        <>
            <section className="heroSection">
                <div className="divTitle">
                <h1>Little Lemon</h1>
                <h4>Chicago</h4>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button style={{cursor:"pointer"}} onClick={toReserve} className="btn">Reserve a table</button>
                </div>
                <img className="hero-image" src="/images/gourmet.jpg" alt="gourment dish"/>
            </section>
        </>
    )
}

export default Hero