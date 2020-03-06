import React from 'react';

export default function Bannertitle({ children, title, subtitle }) {
  return (
    <div className="banner_title">
      <h1>{title}</h1>
      <div></div>
      <p> {subtitle} </p>
      {children}
    </div>
  );
}
