import React from 'react';

export default class Snippet extends React.Component {
    render() {
        const {headline, img, category, title, price} = this.props;

        return <div className="snippet">
            <div className="snippet__headline">{headline}</div>
            <img className="snippet__image" src={`${img}?${Math.random()}`} alt=""/>
            <a href="" className="snippet__category">{category}</a>
            <a href="" className="snippet__title">{title}</a>
            <div className="snippet__price">{price}</div>
        </div>;
    }
}
