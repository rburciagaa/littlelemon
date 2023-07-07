import '../styles/testimonials.css'
import testimonials from '../data/testimonials'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
    return (
        <>
            <h1 style={{ textAlign: 'center' }} className='testimonials-title'>Testimonials</h1>
            <section className="testimonials">
                {
                    testimonials.map((t,i)=>
                        <TestimonialCard
                            key={i+1}
                            rating={t.rating}
                            image={t.image}
                            name={t.name}
                            review={t.review}
                        />
                    )
                }
            </section>
        </>
    )
}
export default Testimonials