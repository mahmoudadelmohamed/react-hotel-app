import React from 'react';

export const Banner = ({ banner, children }) => {
  return <header className={banner}>{children}</header>;
};
Banner.defaultProps = {
  banner: 'banner'
};
export default Banner;
