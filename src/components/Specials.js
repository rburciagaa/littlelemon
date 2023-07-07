import '../styles/specials.css';
import data from '../data/data'
import Card from './Card';


const Specials = () => {
    return (<>
        <section className='specials'>
            <article className='specials-header'>
                <h1 className='title' style={{ display: 'inline' }}>This weeks specials!</h1>
                <button className='btn'>Online Menu</button>
            </article>
            <article className='card-container'>
                {
                    data.map(d=>
                        <Card image={d.image} key={d.title} title={d.title} description={d.description} price={d.price}/>
                    )
                }
            </article>
        </section>

    </>)
}

export default Specials