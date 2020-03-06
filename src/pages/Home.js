import React from 'react';
import Banner from '../components/Banner';
import Bannertitle from '../components/Bannertitle';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeatureRoom from '../components/FeatureRoom';
export const Home = () => {
  return (
    <>
      <Banner banner="banner">
        <Bannertitle
          title="awsome rooms"
          subtitle="single rooms starting at 200$"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Bannertitle>
      </Banner>
      <Services />
      <FeatureRoom />

    </>
  );
};
export default Home;
