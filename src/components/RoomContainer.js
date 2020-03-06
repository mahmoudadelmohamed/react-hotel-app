import React, { Component } from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomContext } from '../context';
import Loading from './Loading';
export default class RoomContainer extends Component {
  static contextType = RoomContext;
 render() {
   const { loading, sortedRooms, rooms } = this.context;
  
   if(loading) {
     return <Loading />;
   }
    return (
      <div>

        <RoomsFilter rooms={rooms}/>
        <RoomsList rooms={sortedRooms}/>
      </div>
    );
  }
}
