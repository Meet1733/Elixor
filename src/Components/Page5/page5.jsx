import React from "react";

import "../../styles/page5.css";
import Arws from "../../Assets/pg5-arws.svg";

function Page5() {
    return (
        <React.Fragment>
            <div className="pg5-main-div">
                <div className="pg5-lft">
                    <p className="pg5-lft-hd">Our identity</p>
                    <div className="pg5-lft-txt">
                        <div className="pg5-lft-clm">

                            <div className="pg5-lft-main-span">
                                <span className="pg5-lft-top-span">
                                    <p className="pg5-lft-bg-txt">150</p>
                                    <p className="pg5-lft-bg-txt pg5-pls">+</p>
                                </span>
                                <p className="pg5-lft-sm-txt">Clients Served</p>
                            </div>

                            <div className="pg5-lft-main-span pg5-clm-blw">
                                <span className="pg5-lft-top-span">
                                    <p className="pg5-lft-bg-txt">75M</p>
                                    <p className="pg5-lft-bg-txt pg5-pls">+</p>
                                </span>
                                <p className="pg5-lft-sm-txt">Views in millions</p>
                            </div>
                        </div>

                        <div className="pg5-lft-clm">

                            <div className="pg5-lft-main-span">
                                <span className="pg5-lft-top-span">
                                    <p className="pg5-lft-bg-txt">5000</p>
                                    <p className="pg5-lft-bg-txt pg5-pls">+</p>
                                </span>

                                <p className="pg5-lft-sm-txt">Videos Completed</p>
                            </div>

                            <div className="pg5-lft-main-span pg5-clm-blw">
                                <span className="pg5-lft-top-span">
                                    <p className="pg5-lft-bg-txt">10</p>
                                    <p className="pg5-lft-bg-txt pg5-pls">+</p>
                                </span>

                                <p className="pg5-lft-sm-txt">Team Size</p>
                            </div>

                        </div>

                        <div className="pg5-lft-clm">
                            <div className="pg5-lft-main-span">
                                <span className="pg5-lft-top-span">
                                    <p className="pg5-lft-bg-txt">8M</p>
                                    <p className="pg5-lft-bg-txt pg5-pls">+</p>
                                </span>
                                <p className="pg5-lft-sm-txt">Subscribers in millions</p>
                            </div>

                            <div className="pg5-lft-main-span pg5-clm-blw">
                                <span className="pg5-lft-top-span">
                                    <p className="pg5-lft-bg-txt">1</p>
                                </span>
                                <p className="pg5-lft-sm-txt">Company</p>
                            </div>
                        </div>
                    </div>
                    <button className="pg5-spd-btn">Speed up your brand </button>
                </div>

                <div className="pg5-rht">
                    <img className="pg5-arw-img" src={Arws} alt="arws-img" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Page5