import React from 'react';

export default function ErrorBox(props) {
  return (
    <div style={props.style} className="error-box">
      {props.error}
    </div>
  );
}
