import React,{useState} from "react";
import './Upcomingdata.css';
import WorkshopForm from "../WorkshopForm";

function Upcomingdata({id,time,logo,description,speaker,date,venue})
{
    const[readmore,setreadmore]=useState(false);
    const Description=readmore?description:`${description.substring(0,160)}...`;//`${description.substring(0,160)}....`
    function readmorehandler()
    {
        setreadmore(!readmore);
    }

    console.log('Logo URL:', logo);

     return(
        <div className="upcoming-card">
        <div className="upcoming-info">
        <div className="upcoming-imgdiv">   
            <img src={logo} className="upcoming-logo"></img>
            {/* console.log("logo"); */}
        </div>
        <div className="upcoming-details">
            <div className="upcoming-speaker">
                <h2 className="upcoming-person">speaker:dr. {speaker}</h2>
            </div>
            <div className="upcoming-date-venue">
                <div className="upcoming-date-time">
                    <div className="upcoming-date">
                        <h3>Date: {date}</h3>
                    </div>
                    <div className="upcoming-time">
                        <h3>Time: {time}</h3>
                    </div>
                </div>
                <div className="upcoming-venue">
                    <h2>Venue: {venue}</h2>
                </div>
            </div>
        </div>
        <div className="upcoming-description">{Description}
            <span className="upcoming-read-more" onClick={readmorehandler}>
            {readmore?'Show Less':'Read More'}
            </span>
        </div>
    </div>
    </div>
     )
}

export default Upcomingdata;