import React from 'react'
import Header from './Header'

const List = (props) => (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
        {props.children}
        </div>
      </div>
    </div>
)

export default List

