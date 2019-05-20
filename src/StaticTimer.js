import React from 'react'

export default function StaticTimer() {
  return (
    <div>
        <h1><span>00</span>:<span>00</span>:<span>00</span></h1>
        <p><span className='display'>Hours</span><span className='display'>Minutes</span><span className='display'>Second</span></p>
    </div>
  )
}
