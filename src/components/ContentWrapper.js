import React from 'react';

export default function ContentWrapper(props) {
  return <div className='page-content-wrapper'>
    {props.children}
  </div>;
}