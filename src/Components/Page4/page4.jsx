import React, { useState } from "react";

import "../../styles/page4.css"
import Img1 from "../../Assets/pg4-img1.svg";
import Lft from "../../Assets/pg4-lft.svg";
import Rht from "../../Assets/pg4-rht.svg";
import Rvwdata from "./reviewdata.json";

function Page4() {

    const [page, setPage] = useState(1);

    function selectPageHandler(selectedPage) {
        if (selectedPage >= 1 && selectedPage <= Rvwdata.length / 4 && selectedPage !== page) {
            setPage(selectedPage);
        }
    }

    return (
        <React.Fragment>
            <div className="pg4-main-div">
                <p className="pg4-hd">Our Success Stories and Analytics</p>

                <div className="pg4-reviews">
                    {
                        Rvwdata.slice(page * 4 - 4, page * 4).map((rvw) => {
                            return <div className="pg4-rvw" key={rvw.id}>
                                <p className="pg4-rvw-hd1">{rvw.hd1}</p>
                                <p className="pg4-rvw-hd2">{rvw.hd2}</p>
                                <p className="pg4-rvw-txt">{rvw.txt}</p>
                                <div className="rvw-ftr">
                                    <img className="pg4-ftr-img" src={Img1} alt="pg4-img" />
                                    <p className="pg4-ftr-text">{rvw.name}</p>
                                </div>
                            </div>
                        })
                    }
                </div>

                <div className="pg4-ftr-page">
                    <button className="pg4-ftr-btn" onClick={() => selectPageHandler(page - 1)}><img className="pg4-ftr-arw" src={Lft} alt="lft-arw" /></button>
                    <button className="pg4-ftr-btn" onClick={() => selectPageHandler(page + 1)}><img className="pg4-ftr-arw" src={Rht} alt="rht-arw" /></button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Page4