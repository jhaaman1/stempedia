import React from 'react'
import { useSelector } from 'react-redux';

const Component_C = () => {
    const get_details = useSelector((Store) => Store.reducer.data);

    return (
      <>
        <div>
          <h1>Components C</h1>
          <p>My Query: <b>{get_details}</b> </p>
        </div>
      </>
    )
}

export default Component_C