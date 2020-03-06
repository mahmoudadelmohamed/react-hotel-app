import React from 'react';
import Banner from '../components/Banner';
import Bannertitle from '../components/Bannertitle';
import { Link } from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';
export const Rooms = () => {
  return (
    <>
      <Banner banner="roomsBanner">
        <Bannertitle title="our rooms">
          <Link to="/" className="btn-primary">
            {' '}
            return home{' '}
          </Link>
        </Bannertitle>
      </Banner>
      <RoomContainer />
    </>
  );
};
export default Rooms;
