import React from 'react';
import loading from './loading.gif';

export default function LoadingBox(props) {
  return (
    <div className="loading-box">
      <img style={{ maxWidth: `${props.size}` }} src={loading} alt="loading" />
    </div>
  );
}
