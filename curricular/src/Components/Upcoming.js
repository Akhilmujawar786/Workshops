import React from "react";
import Upcomingdata from "./Upcomingdata";
import './Upcoming.css';

function Upcoming({upcoming_template})
{
     return(
        <div className="upcoming-container">
            <div className="upcoming-heading"><h1>Upcoming Workshops</h1></div>
            
            <div className="upcoming-basecard">
                {
                    upcoming_template.map((upcoming_data)=>{
                        return <Upcomingdata {...upcoming_data}></Upcomingdata>
                    })
                }
            </div>
        </div>
     )
}
export default Upcoming;