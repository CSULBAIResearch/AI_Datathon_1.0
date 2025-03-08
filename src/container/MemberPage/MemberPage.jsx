import React from 'react'
import {MemberComponent  } from '../../component'
import './MemberPage.css'


//member image
import ShaunLime from "../../asset/memberImg/Shaun_Lim.jpg"
import Camille from "../../asset/memberImg/Camille Wong.jpg"
import Fozhan from "../../asset/memberImg/Foojan Babaeeian.jpg"
import Hitha from "../../asset/memberImg/Hitha Sunkara.jpeg"
import Jose from "../../asset/memberImg/Jose L. Avilla.png"
import Joshua from "../../asset/memberImg/Joshua_Nwabuzor.jpg"
import MyLu from "../../asset/memberImg/MyLu.jpeg"
import Shrawak from "../../asset/memberImg/Shrawak Shakya.png"
import Soroush from "../../asset/memberImg/Soroush Mirzaee.jpeg"





const MemberInfo = [
        {
            name: "Hitha Sunkara",
            position: "Datathon Director",
            memberImg : Hitha,
        },
        {
            name: "Fozhan Babaeeiyan",
            position: "President/Speaker",
            memberImg : Fozhan,
        },
        {
            name: "Shaun Lim",
            position: "Vice President/ Workshop",
            memberImg : ShaunLime,
        },
        {
            name: "Camille Wong",
            position: "Shark-GPT Lead",
            memberImg : Camille,
        },
        {
            name: "Shrawak",
            position: "Treasure",
            memberImg : Shrawak,
        },
        {
            name: "Soroush Mirzaee",
            position: "Tech Lead/ Workshop",
            memberImg : Soroush,
        },

        {
            name: "Jose L. Avila",
            position: "Public Relations Officer",
            memberImg : Jose,
        },

        {
            name: "Joshua Nwabuzor",
            position: "Event Coordinator",
            memberImg : Joshua,
        },

        

        {
            name: "My Lu",
            position: "Website Lead",
            memberImg : MyLu,
        },
    ]
const MemberPage = () => {
    
    return (
    <div className='memberPage-container flex__center box__container' id="Member">
        <h1 className='heroHeading1'>OFFICER</h1>
        <div className="member-section">
            {MemberInfo.map((member, index)=>
                <MemberComponent
                key = {index}
                memberImg={member.memberImg}
                memberName={member.name}
                memberPosition={member.position}
                />
            )}
           
        </div>

    </div>
  )
}

export default MemberPage