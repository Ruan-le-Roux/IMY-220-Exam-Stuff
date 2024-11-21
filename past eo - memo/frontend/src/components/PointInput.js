import React from 'react';
import Proptypes from 'prop-types';

class PointInput extends React.Component
{
    constructor(props)
    {
        super(props);

       this.handleClick = this.handleClick.bind(this);

       this.inputOneRef = React.createRef();
       this.inputTwoRef = React.createRef();
    }

    handleClick(event)
    {
        event.preventDefault();
        const p1 = this.inputOneRef.current.value.split(";").map(coord => parseInt(coord));
        const p2 = this.inputTwoRef.current.value.split(";").map(coord => parseInt(coord));
        this.props.updatePoints(p1, p2);
    }

    static propTypes = {
        updatePoints: Proptypes.func.isRequired
    }

    render()
    {
        return(
            <div>
                <h1>Point Input</h1>
                <label>
                    Point A:
                    <input type='text' ref={this.inputOneRef}/>
                </label>

                <label>
                    point B:
                    <input type='text' ref={this.inputTwoRef}/>
                </label>

                <button onClick={this.handleClick}>Calculate!</button>
            </div>
        );
    }
}

export default PointInput;