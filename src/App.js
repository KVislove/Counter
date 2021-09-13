import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';

const App = () => {

  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    else {
      alert('Zero Limit Reached!!')
    }
  }

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>{count}</h1>
          <div className='btn'>
            <button onClick={increase}><AddIcon /></button>
            <button onClick={decrease}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App