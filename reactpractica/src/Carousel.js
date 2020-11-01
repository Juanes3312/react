import React,{useEffect, useState} from 'react';

const Carousel = ({media}) =>{
    const[active, setActive] = useState(0);
    const[photos, setphotos] = useState([]);

    useEffect(()=>{
        console.log('media', media)
        console.log(media.length)
        let photosArray = ['https://placecorgi.com/600/600'] 
        if(media.length){
          photosArray = media.map(({large})=>large)
        }
        console.log(photosArray)
        setphotos(photosArray); 
    }, [media]);
    console.log(photos)
    const handleIndexClick = (event) => setActive(+event.target.dataset.index)

    return(
        <div className='carousel'>
            <img src={photos[active]} alt="animal"/>
            <div className='carousel-smaller'>
                {photos.map((photo, index)=>(
                    <img
                    key={photo}
                    src={photo}
                    data-index = {index}
                    alt= 'animal thumbnail'
                    className={index === active? 'active': ''}
                    onClick = {handleIndexClick}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel;