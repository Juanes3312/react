import React, {useState, useEffect} from 'react'
import Pet from '@frontendmasters/pet'
import Carousel from './Carousel'
const Detail = ({id}) =>{
    const[Currentanimal, setAnimal] = useState();
    const[Loading, setLoading] = useState(true);
    useEffect(()=>{
        Pet.animal(id)
        .then(({animal})=>{
            setAnimal({
                url: animal.url,
                name:animal.name,
                animal: animal.type,
                location:`${animal.contact.address.city},${animal.contact.address.state}`,
                description: animal.description,
                media: animal.photos,
                breed: animal.breeds.primary,
            })
            setLoading(false);
        });
    }, [id])

    if(Loading){
        return(<p>Loading...</p>)
    }

    const {animal, breed, location, name, media, description} = Currentanimal// === const media = Currentanimal.media

    return(
        <>
        <div className= 'details'>
            <Carousel media={media}/>
            <div>
                <h1>{name}</h1>
                <h2>{`${animal}-${breed}- ${location}`}</h2>
                <p>{description}</p>
            </div>
        </div>
        </>
    )
}

export default Detail