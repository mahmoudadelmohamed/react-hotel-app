import React from 'react';
import Banner from '../components/Banner';
import Bannertitle from '../components/Bannertitle';
import { Link } from 'react-router-dom';
export const Error = () => {
  return (
    <div>
      <Banner>
        <Bannertitle title="404" subtitle="this page not found">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Bannertitle>
      </Banner>
    </div>
  );
};
export default Error;
