import React from "react";

import Logo from "../../../Assets/nav-logo.svg";
import Img1 from "../../../Assets/ftr-img1.svg";
import Img2 from "../../../Assets/ftr-img2.svg";
import Img3 from "../../../Assets/ftr-img3.svg";
import Img4 from "../../../Assets/ftr-img4.svg";
import Img5 from "../../../Assets/ftr-img5.svg";
import Img6 from "../../../Assets/ftr-img6.svg";
import Column from "./Column";
import "../../../styles/footer.css";

function Footer() {
    return (
        <React.Fragment>
            <div className="ftr-main-div">
                <div className="ftr-clm1">
                    <img className="ftr-logo" src={Logo} alt="logo-img" />
                    <a className="ftr-clm1-txt1" href="/">Privacy</a>
                    <a className="ftr-clm1-txt1" href="/">Terms and Condition</a>
                    <a className="ftr-clm1-txt2" href="/">© 2023 elexor.com</a>
                    <div className="ftr-clm1-sociallg">
                        <a href="/"><img className="ftr-clm1-soc-img" src={Img1} alt="ftr-img1" /></a>
                        <a href="/"><img className="ftr-clm1-soc-img" src={Img2} alt="ftr-img2" /></a>
                        <a href="/"><img className="ftr-clm1-soc-img" src={Img3} alt="ftr-img3" /></a>
                        <a href="/"><img className="ftr-clm1-soc-img" src={Img4} alt="ftr-img4" /></a>
                        <a href="/"><img className="ftr-clm1-soc-img" src={Img5} alt="ftr-img5" /></a>
                        <a href="/"><img className="ftr-clm1-soc-img" src={Img6} alt="ftr-img6" /></a>
                    </div>
                </div>
                <Column l1="Learn" l2="Introduction" l3="Features" l4="Staking" l5="Get ATOM" l6="FAQ" />
                <Column l1="Build" l2="Developer Portal" l3="Ignite CLI" l4="Tresurenet SDK" l5="IBC Protocol" />
                <Column l1="Explore" l2="Tokens" l3="Apps & Services" l4="Wallets" l5="Gravity DEX" l6="Blog" />
                <Column l1="Participate" l2="Community" l3="Contributors" l4="Events" l5="Newsletters" />
                <Column l1="Resources" l2="About" l3="Press Kit" l4="Design" l5="Resources" />
            </div>
        </React.Fragment>
    )
}

export default Footer