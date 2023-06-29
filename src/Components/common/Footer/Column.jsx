import React from "react";

import "../../../styles/footer.css";

function Column(props) {
    return (
        <div className="ftr-clm2">
            <a href="/" className="ftr-clm2-txt ftr-clm2-hd-txt">{props.l1}</a>
            <a href="/" className="ftr-clm2-txt">{props.l2}</a>
            <a href="/" className="ftr-clm2-txt">{props.l3}</a>
            <a href="/" className="ftr-clm2-txt">{props.l4}</a>
            <a href="/" className="ftr-clm2-txt">{props.l5}</a>
            <a href="/" className="ftr-clm2-txt">{props.l6}</a>
        </div>
    )
}

export default Column