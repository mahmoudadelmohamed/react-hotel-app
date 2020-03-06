import React from 'react';
import Room from './Room';
export default function RoomsList({rooms})  {
 const insertRooms = rooms.map(item => {
    return <Room key={item.id} room={item} />;
  })
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        { insertRooms }
      </div>
    </section>
  );
}
