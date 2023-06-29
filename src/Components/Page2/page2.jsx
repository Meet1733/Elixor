import React from "react";

import "../../styles/page2.css";
import Img2 from "../../Assets/page2-img.svg";
import Playbtn from "../../Assets/play-btn.svg";
import Ftrimg1 from "../../Assets/pg2-ftr-img1.svg";
import Ftrimg2 from "../../Assets/pg2-ftr-img2.svg";
import Ftrimg3 from "../../Assets/pg2-ftr-img3.svg";
import Ftrimg4 from "../../Assets/pg2-ftr-img4.svg";
import Ftrimg5 from "../../Assets/pg2-ftr-img5.svg";
import Ellipse1 from "../../Assets/pg2-elp-lght.svg";
import Ellipse2 from "../../Assets/pg2-elp-drk.svg";

function Page2() {
    return (
        <React.Fragment>
            <div className="pg2-top-div">
                <p className="pg2-hd-txt">Here's how we work to make your videos magical:</p>
            </div>

            <div className="pg2-ctr-div">
                <div className="pg2-ctr-img">
                    <img className="pg2-img" src={Img2} alt="page2-img" />
                    <button className="ply-btn"><img style={{ backgroundColor: "transparent" }} src={Playbtn} alt="play-btn" /></button>
                </div>
            </div>

            <div className="pg2-btm-txt">
                <p className="pg2-btm-l1">Services</p>
                <p className="pg2-btm-l2">Our Youtube Automation services are the perfect solution for aspiring Youtubers and individuals who want to earn passive income and take their content to the next level.</p>
            </div>

            <div className="pg2-ftr">
                <img className="ftr-img-1" src={Ftrimg1} alt="ftr-img-1" />
                <img className="ftr-img-2" src={Ftrimg2} alt="ftr-img-2" />
                <img className="ftr-img-3" src={Ftrimg3} alt="ftr-img-3" />
                <img className="ftr-img-4" src={Ftrimg4} alt="ftr-img-4" />
                <img className="ftr-img-5" src={Ftrimg5} alt="ftr-img-5" />
            </div>

            <div className="pg2-ftr-elp-div">
                <div className="pg2-ftr-sm-elp">
                    <img style={{ width: "100%", backgroundColor: "transparent" }} src={Ellipse2} alt="elp2-img" />
                </div>

                <div className="pg2-ftr-ellipse">
                    <img style={{ width: "100%", backgroundColor: "transparent" }} src={Ellipse1} alt="elp1-img" />
                </div>
            </div>
        </React.Fragment>

    )
}

export default Page2