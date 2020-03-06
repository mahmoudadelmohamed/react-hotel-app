import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';
export default class FeatureRoom extends Component {
  static contextType = RoomContext;
  render() {
    const { loading, featuredRooms } = this.context;
    let rooms = featuredRooms.map(items => {
     return <Room key={ items.id } room={ items } />;
    })

    return (
      <section className="featured-rooms">
        <Title title="featured rooms"/>
        <div className="featured-rooms-center">
          { loading ? <Loading /> :   rooms }
        </div>
      </section>
    );
  }
}
