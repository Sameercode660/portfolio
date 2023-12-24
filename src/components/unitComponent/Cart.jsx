import React from 'react'

function Workcart({imgUrl, logoName, description, link}) {
  return (
    <div>
      <div className="log">
        <img src={imgUrl} alt="" />
      </div>
      <div className="logo-name">
        <span>{logoName}</span>
      </div>
      <div className="description">
        <span>{description}</span>
      </div>
      <div className="link">
        <a href={link}></a>
      </div>
    </div>
  )
}

export default Workcart
