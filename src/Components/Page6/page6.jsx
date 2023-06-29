import React from "react";

import "../../styles/page6.css";
import Yt from "../../Assets/pg6-yt.svg";
import Twit from "../../Assets/pg6-twit.svg";
import Reddit from "../../Assets/pg6-rdt.svg";
import Tele from "../../Assets/pg6-tele.svg";
import Dcrd from "../../Assets/pg6-dcrd.svg";
import Lg from "../../Assets/pg6-lg.svg";
import Git from "../../Assets/pg6-git.svg";
import Plan from "./plan";

function Page6() {
    return (
        <React.Fragment>
            <div className="pg6-main-div">
                <div className="pg6-top-txt">
                    <p className="pg6-top-row1">Pricing and plans</p>
                    <p className="pg6-top-row2">Our pricing plans are designed to fit any budget.</p>
                    <p className="pg6-top-row2"> Choose the one that works for you!</p>
                    <p className="pg6-top-row2">Chat with us for custom packages.</p>
                </div>

                <div className="pg6-price-div">
                    <Plan l1="Current Plan" l2="Free" l3="10 Posts/ month" p1="10 Posts Per Month" btn="Buy now" />
                    <Plan l1="Individual Plan" l2="$10" l3="50 Posts/ month" p1="50 Posts Per Month" btn="Buy now" />
                    <Plan l1="Organization" l2="$30" l3="Unlimited Posts/ month" p1="Unlimited Posts Per Month" btn="Buy now" />
                    <Plan l1="Annual Plan" l2="$99" l3="Unlimited Posts/ year" p1="Unlimited Posts Per Month" btn="Custom request" />
                </div>

                <div className="pg6-folw-div">
                    <p className="pg6-folw-l1">Follow us on social media</p>
                    <p className="pg6-folw-l2">For a behind-the-scenes look at our company and team.</p>

                    <div className="pg6-social-div">
                        <div className="pg6-link1">
                            <a href="/"><img src={Yt} alt="yt-img" /></a>
                            <a className="pg6-blw-link" href="/">@elexor</a>
                        </div>

                        <div className="pg6-link1">
                            <a href="/"><img src={Twit} alt="twit-img" /></a>
                            <a className="pg6-blw-link" href="/">@elexor</a>
                        </div>

                        <div className="pg6-link1">
                            <a href="/"><img src={Reddit} alt="rdt-img" /></a>
                            <a className="pg6-blw-link" href="/">@elexor</a>
                        </div>

                        <div className="pg6-link1">
                            <a href="/"><img src={Tele} alt="tele-img" /></a>
                            <a className="pg6-blw-link" href="/">@elexor</a>
                        </div>

                        <div className="pg6-link1">
                            <a href="/"><img src={Dcrd} alt="dcrd-img" /></a>
                            <a className="pg6-blw-link" href="/">@elexor</a>
                        </div>

                        <div className="pg6-link1">
                            <a href="/"><img src={Lg} alt="lg-img" /></a>
                            <a className="pg6-blw-link" href="/">@elexor</a>
                        </div>

                        <div className="pg6-link1" style={{ marginRight: "0" }}>
                            <a style={{ marginRight: "0" }} href="/"><img src={Git} alt="git-img" /></a>
                            <a className="pg6-blw-link" href="/">@elexor</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Page6