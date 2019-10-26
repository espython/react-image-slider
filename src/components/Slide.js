import React from 'react';

export default function Slide({ src }) {
  const styles = {
    backgroundImage: `url(${src})`,
    backgroundSize: `cover`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };
  return <div className="slide" style={styles}></div>;
}
