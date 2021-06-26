import React from 'react'
import { useHistory } from 'react-router-dom';

export function Home() {
  const history = useHistory();

  function handleClick() {
    history.push('/checkout');
  }

  return (
    <div>
      <h1>Home</h1>
      <button type="button" onClick={handleClick}>
        checkout
    </button>
    </div>
  )
}
