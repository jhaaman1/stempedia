import React from 'react';
import { useDispatch } from 'react-redux';
import { getdata } from '../Redux/App/action';

const Component_B = () => {
    const dispatch = useDispatch();

    const handleInput = (e) => {
      dispatch(getdata(e.target.value))
    }
    return (
      <>
        <div>
          <h1>Components B</h1>
          <input type="text" placeholder='Type anything' onChange={(e) => handleInput(e)} />
        </div>
      </>
    )
  }

export default Component_B