import React from 'react'
import "./JudgePage.css"

const JudgePage = () => {


    // const JudgeInfo = [
    //     {
    //         name: "name1",
    //         describtion : "describtion"
    //     },
    //     {
    //         name: "name1",
    //         describtion : "describtion"
    //     },
    // ]


  return (
    <div className='judge-container box__container flex__center' id = "Judge">
        <h1 className='heroHeading1'>JUDGE</h1>
        <div className="judge-describtion">
            <ul className='judge-list'>
                <li>Shrey Modi </li>
                <li>Rahul Vishwakarma</li>
                <li>Dave Winter</li>
                <li>Amir Ghasemkhani </li>
                <li>Hedayatipour </li>

            </ul>
        </div>

    </div>
    
  )
}

export default JudgePage