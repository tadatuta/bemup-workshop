import React from 'react';
import Snippet from "../Snippet/Snippet";

import data from "../../data.js";

export default class Goods extends React.Component {
    render() {
        return <div className="goods">
            {data.goods.map((snippet, idx) => <Snippet key={idx} {...snippet} />)}
        </div>;
    }
}
