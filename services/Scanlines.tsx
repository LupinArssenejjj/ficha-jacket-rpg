import React from 'react';

const Scanlines: React.FC = () => {
  return (
    <>
      <div className="scanlines" />
      <div className="fixed inset-0 pointer-events-none z-40 bg-gradient-to-b from-transparent to-black/30" />
    </>
  );
};

export default Scanlines;
