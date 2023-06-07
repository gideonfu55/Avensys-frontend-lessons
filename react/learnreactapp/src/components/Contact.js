import React from 'react'
import "./../demo.css"

function Contact(data) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img height="250px" src={data.image} class="card-img-top p-2" alt=""/>
      <div class="card-body">
        <h3 class="card-title fw-bold mt-3">{data.name}</h3>
        <h5 class="card-text">{data.message}</h5>
        <a href="#" class="btn btn-primary mt-3">See Profile</a>
      </div>
    </div>
  )
}

export default Contact