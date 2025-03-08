import React from 'react'
import './memberComponent.css'

import ShaunLime from "../../asset/memberImg/Shaun_Lim.jpg"

const MemberComponent = ({memberName, memberPosition,memberImg}) => {
  return (
    <div className="member__component">
        <div className="memberContainer-img">
            <img src={memberImg}alt="member img" />
        </div>

        <div className="memberContainer-description">
            <p className="memberContainer-name">{memberName}</p>
            <p className="memberContainer-major ">{memberPosition}</p>
        </div>
    </div>
  )
}

export default MemberComponent