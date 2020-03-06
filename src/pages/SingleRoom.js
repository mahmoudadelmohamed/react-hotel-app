import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpg";
import Banner from "../components/Banner";
import Bannertitle from "../components/Bannertitle";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledBanner from '../components/StyledBanner';

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    let room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found... </h3>
          <Link to="/rooms/" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    console.log(room);
  const insertImages = images.map((items, index) => {
    if(index > 0) {
      return <img src={ items } alt={ name } key={ index } />;
    }
  })
  const insertExtras = extras.map((items, index) => {
    return <li key={index}>- {items}</li>;
  })
   return (
     <>
      <StyledBanner img={images[0]}>
        <Bannertitle title={`${name} rooms`}>
          <Link to="/" className="btn-primary">
            back to rooms
          </Link>
        </Bannertitle>
      </StyledBanner>
      <section className="single-room">
        <div className="single-room-images">
         { insertImages }
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{ description }</p>
          </article>
           <article className="info">
            <h3>info</h3>
            <h6>price ${price}</h6>
            <h6>size {size} SQFT</h6>
            <h6>max capacity : { capacity > 1 ? `${capacity} people`:`${capacity} person`}</h6>
            <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{breakfast && 'free breakfast included'}</h6>
           </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
         <ul className="extras">
         { insertExtras }
         </ul>
      </section>
    </>
  )
  }
}
