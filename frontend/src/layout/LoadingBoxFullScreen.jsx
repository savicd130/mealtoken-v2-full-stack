import React from 'react';
import loading from './loading.gif';

export default function LoadingBoxFullScreen(props) {
  return (
    <div className="loading-box-full-screen">
      <img style={{ maxWidth: `${props.size}` }} src={loading} alt="loading" />
    </div>
  );
}
