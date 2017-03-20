import React from 'react'
import Nav from './Nav'

let Main = (props) => {
  return(
    <div>
      <div>
        <div>
          <Nav/>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Main
