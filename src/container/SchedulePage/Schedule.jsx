import React from 'react'
import "./Schedule.css"
const Schedule = () => {
  return (
    <div className='SchedulePage box__container flex__center' id="Schedule">
        <h1 className='heroHeading1'>SCHEDULE</h1>
        <div className='heroP scheduleNotice'>* Schedule Info: The Event Schedule is Tentative for now, Make sure it says that on the website. But make sure it is clear that Datathon will be from 8:00 AM to 10:00PM . We will finalize in the future once we know more info about workshops/speakers</div>
        <div className="schedule-container">
          
            <ul className='list-event'>
                <li>8:00 AM - 8:30 AM: Check-in</li>
                <li>8:30 AM - 9:30 AM: Welcome and Opening Speakers </li>
                <li>9:30 AM - 10:00 AM: Problem Introduction and Q&A </li>
                <li>10:00 AM: Hacking Starts</li>
                <li>10:00 AM - 12:30 PM: Hacking Session 1</li>
                <li>12:30 PM - 1:30 PM: Lunch Served</li>
                <li>1:30 PM - 4:00 PM: Hacking Session 2 </li>
                <li>4:15 PM - 6:30 PM: Hacking Session 3</li>
                <li>6:30 PM - 7:30 PM: Dinner Served </li>
                <li>7:30 PM - 8:00 PM: Final Sprint Hacking Session </li>
                <li>8:00 PM - Hacking Ends</li>
                <li>8:15 PM - 9:15 PM: Presentations & Judging</li>
                <li>9:30 PM - 10:00 PM: Award Announcements and Closing Remarks</li>
            </ul>
        </div>

    </div>
  )
}

export default Schedule