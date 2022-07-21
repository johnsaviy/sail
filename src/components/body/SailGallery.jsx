
import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';
import './image-gallery.css'



const images = [
  {
    original: 'https://savmedia.mo.cloudinary.net/0.jpg',
    thumbnail: 'https://savmedia.mo.cloudinary.net/0.jpg',
  },
  {
    original: 'https://savmedia.mo.cloudinary.net/00.jpeg',
    thumbnail: 'https://savmedia.mo.cloudinary.net/00.jpeg',
  },
  {
    original: 'https://savmedia.mo.cloudinary.net/10.jpg',
    thumbnail: 'https://savmedia.mo.cloudinary.net/10.jpg',
  },
  {
    original: 'https://savmedia.mo.cloudinary.net/9.jpg',
    thumbnail: 'https://savmedia.mo.cloudinary.net/9.jpg',
  },
 
  {
    original: 'https://savmedia.mo.cloudinary.net/5.jpg',
    thumbnail: 'https://savmedia.mo.cloudinary.net/5.jpg',
  },
  {
    original: 'https://savmedia.mo.cloudinary.net/4.jpg',
    thumbnail: 'https://savmedia.mo.cloudinary.net/4.jpg',
  },
  {
    original: 'https://savmedia.mo.cloudinary.net/3.jpg',
    thumbnail: 'https://savmedia.mo.cloudinary.net/3.jpg',
  },
  {
    original: 'https://savmedia.mo.cloudinary.net/2.jpg',
    thumbnail: 'https://savmedia.mo.cloudinary.net/2.jpg',
  },
  {
    original: 'https://savmedia.mo.cloudinary.net/6.jpg',
    thumbnail: 'https://savmedia.mo.cloudinary.net/6.jpg',
  },

];



class SailGallery extends Component {
  render() {
    return (
        <ImageGallery
         items={images}
        //  thumbnailPosition='left'
         
         />
    )
  }
}

export default SailGallery