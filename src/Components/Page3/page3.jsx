import React from "react";

import "../../styles/page3.css";
import Img1 from "../../Assets/pg3-img1.png";
import Img2 from "../../Assets/pg3-img2.png";
import Img3 from "../../Assets/pg3-img3.png";
import Img4 from "../../Assets/pg3-img4.png";
import Img5 from "../../Assets/pg3-img5.png";
import Ftr from "../../Assets/pg3-ftr.svg";

function Page3() {
    return (
        <React.Fragment>
            <div className="pg3-main-div">
                <div className="row-1">
                    <div className="row-1-lft">
                        <p className="pg3-row-hd">Script Writing:</p>
                        <ul className="pg3-row-txt">
                            <li>Captivate your audience with compelling stories and crisp dialogue that bring your vision to life.</li>
                            <li>Turn your ideas into a captivating narrative with our expert scriptwriting services.</li>
                            <li>Our team of talented writers will help you create a script that engages your audience from start to finish.</li>
                        </ul>
                    </div>

                    <div className="row-1-rht">
                        <img className="pg3-row-img" src={Img1} alt="pg3-img1" />
                    </div>
                </div>

                <div className="row-2">
                    <div className="row-2-lft">
                        <p className="pg3-row-hd">Voice Over:</p>
                        <ul className="pg3-row-txt">
                            <li>Give your videos a professional touch with our high-quality voice-over services.</li>
                            <li>Our experienced voice actors will bring your script to life with their engaging and dynamic voices.</li>
                            <li>Whether you need a warm and friendly voice or a commanding and authoritative one, we've got you covered.</li>
                        </ul>
                    </div>

                    <div className="row-2-rht">
                        <img className="pg3-img2" src={Img2} alt="pg3-img2" />
                    </div>
                </div>

                <div className="row-1">
                    <div className="row-1-lft">
                        <p className="pg3-row-hd">Video Editing:</p>
                        <ul className="pg3-row-txt">
                            <li>Make your videos stand out with our professional video editing services.</li>
                            <li>From color correction to special effects, our expert editors will elevate your footage to the next level.</li>
                            <li>We'll transform your raw footage into a polished final product that looks and feels professional.</li>
                        </ul>
                    </div>

                    <div className="row-1-rht">
                        <img className="pg3-row-img" src={Img3} alt="pg3-img3" />
                    </div>
                </div>

                <div className="row-2">
                    <div className="row-2-lft">
                        <p className="pg3-row-hd">YouTube Thumbnail:</p>
                        <ul className="pg3-row-txt">
                            <li>Make your videos impossible to ignore with our attention-grabbing YouTube thumbnail designs.</li>
                            <li>Our expert designers will create eye-catching thumbnails that capture the essence of your video and entice viewers to click.</li>
                            <li>With our custom thumbnails, you'll see an increase in views and engagement in no time.</li>
                        </ul>
                    </div>

                    <div className="row-2-rht">
                        <img className="pg3-img4" src={Img4} alt="pg3-img4" />
                    </div>
                </div>

                <div className="row-1">
                    <div className="row-1-lft">
                        <p className="pg3-row-hd">YouTube Video SEO:</p>
                        <ul className="pg3-row-txt">
                            <li>Get your videos seen by more people with our expert YouTube video SEO services.</li>
                            <li>We'll optimize your videos with the right keywords, tags, and descriptions to help them rank higher in search results.</li>
                            <li>With our proven strategies, you'll see an increase in views, likes, and subscribers in no time.</li>
                        </ul>
                    </div>

                    <div className="row-1-rht">
                        <img className="pg3-img4" src={Img5} alt="pg3-img5" />
                    </div>
                </div>
            </div>
            <div className="pg3-ftr">
                <img src={Ftr} alt="pg3-ftr-img" />
            </div>
        </React.Fragment>
    )
}

export default Page3


























