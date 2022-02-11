import React from 'react';

const Paper = (props) => {
  return (
    <section className={`bg-white min-vh-100 mx-md-3 border border-5 border-gray px-md-5 px-2 py-5 paper ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Paper;
