import React from 'react'
import Nav from './Nav'

let Main = (props) => {
  return(
    <div>
      <div>
        <div>
          <Nav/>
          <p className="text-center">Main component rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Main
