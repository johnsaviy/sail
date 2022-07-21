
import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';
import './image-gallery.css'



const images = [
  {
    original: 'https://savmedia.mo.cloudinary.net/slideimg000.jpg',
    thumbnail: 'https://savmedia.mo.cloudinary.net/slideimg000.jpg',
  },
  {
    original: 'https://savmedia.mo.cloudinary.net/slideimg00.jpg',
    thumbnail: 'https://savmedia.mo.cloudinary.net/slideimg00.jpg',
  },
  {
    original: 'https://savmedia.mo.cloudinary.net/slideimg01.jpg',
    thumbnail: 'https://savmedia.mo.cloudinary.net/slideimg01.jpg',
  },
 
  {
    original: 'https://savmedia.mo.cloudinary.net/slideimg02.jpg',
    thumbnail: 'https://savmedia.mo.cloudinary.net/slideimg02.jpg',
  },
  {
    original: 'https://savmedia.mo.cloudinary.net/slideimg1.jpg',
    thumbnail: 'https://savmedia.mo.cloudinary.net/slideimg1.jpg',
  },
  {
    original: 'https://savmedia.mo.cloudinary.net/slideimg5.jpg',
    thumbnail: 'https://savmedia.mo.cloudinary.net/slideimg5.jpg',
  },
  {
    original: 'https://savmedia.mo.cloudinary.net/slideimg3.jpg',
    thumbnail: 'https://savmedia.mo.cloudinary.net/slideimg3.jpg',
  },
 

];



class Slider extends Component {
  render() {
    return (
        <div >
        <ImageGallery
         items={images}
         showPlayButton={false}
         showFullscreenButton={false}
         autoPlay={true}
         
         />
      </div>
    )
  }
}

export default Slider