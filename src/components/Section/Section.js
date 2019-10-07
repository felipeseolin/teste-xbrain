import React from 'react';

import Title from '../Title/Title';

export default function Section({ title, children }) {
  return (
    <>
      <Title>{ title }</Title>
      <div>
        { children }
      </div>
    </>
  );
}
