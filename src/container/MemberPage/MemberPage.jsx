import React from 'react'
import {MemberComponent  } from '../../component'

const MemberInfo = [
        {
            name: "name1",
            position: "pos1"
        },
        {
            name: "name1",
            position: "pos1"
        },
    ]
const MemberPage = () => {
    
    return (
    <div className='memberPage-container flex__center box__container'>
        <h1>Member Page</h1>
        <div className="member-section">
            
            <MemberComponent/>
           
        </div>

    </div>
  )
}

export default MemberPage