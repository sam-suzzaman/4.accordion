import React, { useState } from "react";

import data from "./data";
import SingleQuestion from "./singleQuestion";

function App() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="title">
                    <h2>questions and answers</h2>
                </div>
                <div className="question">
                    {data.map((value) => {
                        return <SingleQuestion key={value.id} {...value} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
