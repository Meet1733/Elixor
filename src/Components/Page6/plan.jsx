import React from "react";

import "../../styles/page6.css";
import Tick from "../../Assets/pg6-tick.svg";

function Plan(props) {
    return (
        <div className="pg6-plan1">
            <p className="pg6-plan-l1">{props.l1}</p>
            <p className="pg6-plan-l2">{props.l2}</p>
            <p className="pg6-plan-l3">{props.l3}</p>
            <p className="pg6-plan-l4">What's included</p>
            <p className="pg6-plan-pts"><img className="pg6-tick-img" src={Tick} alt="tick-img" />{props.p1}</p>
            <p className="pg6-plan-pts"><img className="pg6-tick-img" src={Tick} alt="tick-img" />Facebook Integration</p>
            <p className="pg6-plan-pts"><img className="pg6-tick-img" src={Tick} alt="tick-img" />Instagram Integration</p>
            <p className="pg6-plan-pts"><img className="pg6-tick-img" src={Tick} alt="tick-img" />LinkedIn Integration </p>
            <p className="pg6-plan-pts"><img className="pg6-tick-img" src={Tick} alt="tick-img" />Pinterest Integration</p>
            <p className="pg6-plan-pts"><img className="pg6-tick-img" src={Tick} alt="tick-img" />Youtube Channel</p>
            <p className="pg6-plan-pts"><img className="pg6-tick-img" src={Tick} alt="tick-img" />Twitter Integration</p>
            <p className="pg6-plan-pts"><img className="pg6-tick-img" src={Tick} alt="tick-img" />Promotion</p>
            <button className="pg6-plan-btn">{props.btn}</button>
        </div>
    )
}

export default Plan