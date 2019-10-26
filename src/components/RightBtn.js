import React from 'react';

export default function RightBtn({ onClick }) {
  return (
    <div className="round-btn" onClick={onClick}>
      &gt;
    </div>
  );
}
