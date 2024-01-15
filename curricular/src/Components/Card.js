import { useState } from "react";
import React from "react";
import './Card.css';

function Card({ id, time, logo, description, speaker, date, venue, removecard }) {

    const [readmore, setreadmore] = useState(false);

    function raedmorehandler() {
        setreadmore(!readmore);
    }

    const Description = readmore ? description : (description ? `${description.substring(0, 160)}....` : '');

    return (
        <div className="card">
            <div className="info">
                <div className="imgdiv">
                    <img src={logo} className="logo" alt="Logo"></img>
                </div>
                <div className="details">
                    <div className="speaker">
                        <h2 className="person">speaker:dr. {speaker}</h2>
                    </div>
                    <div className="date-venue">
                        <div className="date-time">
                            <div className="date">
                                <h3>Date: {date}</h3>
                            </div>
                            <div className="time">
                                <h3>Time: {time}</h3>
                            </div>
                        </div>
                        <div className="venue">
                            <h2>Venue: {venue}</h2>
                        </div>
                    </div>
                </div>
                <div className="description">{Description}
                    <span className="read-more" onClick={raedmorehandler}>
                        {readmore ? 'Show Less' : 'Read More'}
                    </span>
                </div>
                <button className="refresh-btn2" onClick={() => removecard(id)}>Not Interested</button>
            </div>
        </div>
    )
}

export default Card;
