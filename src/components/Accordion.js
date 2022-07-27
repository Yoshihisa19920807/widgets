import React, { useState } from 'react';

// class Accordion extends Component {
//     onTitleClick() {
//         console.log('title was called')
//     }
// }

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) =>{
        // console.log('title clicked', index);
        setActiveIndex(index);
    };
    
    const renderedItems = items.map( (item, index) => {

        const active = index === activeIndex ? 'active' : '';

        return  (
            <React.Fragment key={item.title}>
                <div
                    className = {`title  ${active}`}
                    onClick= {() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className = {`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
}
    export default Accordion;