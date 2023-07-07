import '../styles/card.css'
import { MdDeliveryDining } from "react-icons/md"

const Card = ({ image, alt, title, description, price }) => {
    return (<>
        <div className="card">
            <div className='image-container'>
                <img className="card-image" src={image} alt={alt} />
            </div>
            <article className='grid'>
                <h2 className="title">{title}</h2>
                <p className="price">{price}</p>
                <p className="description">{description}</p>
                <p className="order">Order a delivery </p>
                <p role="img" aria-description='A bike image to delivery'>
                    { <MdDeliveryDining size={30} style={{ color: "#f4ce14", marginLeft: "10px"}} /> }
                </p>
            </article>
        </div>
    </>)
}
export default Card