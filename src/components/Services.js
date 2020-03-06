import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
export default class Services extends Component {
  state = {
     services: [
       {
         icon: <FaCocktail />,
         title: 'Free Cocktail',
         info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Molestiae fugit id voluptatibus illum placeat dolores laudantium sed ipsam autem, atque!'
       },
       {
         icon: <FaHiking />,
         title: 'Endless Hiking',
         info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Molestiae fugit id voluptatibus illum placeat dolores laudantium sed ipsam autem, atque!'
       },
       {
         icon: <FaShuttleVan />,
         title: 'Free Shuttle',
         info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Molestiae fugit id voluptatibus illum placeat dolores laudantium sed ipsam autem, atque!'
       },
       {
         icon: <FaBeer />,
         title: 'Strongest Beer',
         info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Molestiae fugit id voluptatibus illum placeat dolores laudantium sed ipsam autem, atque!'
       },
     ]
  }
  render() {
    const elements = this.state.services.map((item, index) => {
    return (
      <article key={index} className="service">
        <span>{item.icon}</span>
        <h6>{item.title}</h6>
        <p>{item.info}</p>
      </article>
    );
  });

    return (
      <section  className="services">
        <Title title="Services"/>
         <div className="services-center">
          { elements }
         </div>
      </section>
    );
  }

}
