import React, { useState } from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
    const [show, setShow] = useState(false);
    return (
        <div className="singleQst">
            <div className="qTitle">
                <h3>{title}</h3>
                <button className="btn" onClick={() => setShow(!show)}>
                    {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            <p className={`content ${show && "paraShow"}`}>
                {show && <p>{info}</p>}
            </p>
        </div>
    );
};

export default SingleQuestion;
