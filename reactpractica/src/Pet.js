import react from 'react'
let hero = 'http://placecorgi.com/300/300';


const Pet = ({name, animal, breed, media, location, id}) =>{

    return(
    <a href={`/details${id}`} className="pet">
        <div className='image-container'>
            <img src={hero} alt={name}></img>
        </div>
        <div className='info'>
            <h1>{name}</h1>
            <h2>{`${animal} - ${breed} - ${location}`}</h2>
        </div>
    </a>
    )
}

export default Pet;