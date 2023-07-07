import '../styles/testimonials.css'

const TestimonialCard = ({ rating, image, name, review }) => {
    return (<>
        <section className="testimonial-card">
            <h4 className="card-rating">Rating: <span className='rating-value'>{rating}</span></h4>
            <div className='img-name'>
                <img className="card-img" src={image} alt="testimonial image" />
                <h4 className="card-name">Name: <span className='user-name'>{name}</span></h4>
            </div>
            <div className="card-review">
                <h4>Review: </h4>
                <p>{review}</p>
            </div>
        </section>
    </>)
}
export default TestimonialCard