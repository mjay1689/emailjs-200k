import React from 'react'

const ScrollTop = ({scrolledUp}) => {
  return (
    <button className={`scroll-to-top fixed z-40 bottom-2 right-2 lg:bottom-10 lg:right-10 ${scrolledUp ? "block" : "hidden"}`}>
    ↑
  </button>
    )
}

export default ScrollTop