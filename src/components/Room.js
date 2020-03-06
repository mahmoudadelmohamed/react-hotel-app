import React from 'react';
import defaultImg from '../images/room-1.jpg'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
export default function Loading({ room }) {
 const { name, slug, images, price } = room;
 
  return (
    <article>
      <div className="img-container">
        <img src={ images[0] || defaultImg } alt="image_slug" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
      </div>
      <p className="room-info">{ name }</p>
    </article>
  );
}
