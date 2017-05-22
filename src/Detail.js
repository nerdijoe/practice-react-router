import React from 'react'

const Detail = (props) => {

  return (
    <div>
      <h1>Detail</h1>
      { props.data.map( m => {
        return (
          <p>{m}</p>
        )
      })}
    </div>
  )
}

export default Detail
