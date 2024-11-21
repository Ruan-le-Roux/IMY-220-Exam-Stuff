import React from 'react';
import Proptypes from 'prop-types';

class Line extends React.Component
{
    constructor(props)
    {
        super(props);

       this.calculateDistance = this.calculateDistance.bind(this);
    }

    handleClick(event)
    {
        event.preventDefault();
        const p1 = this.inputOneRef.current.value.split(";").map((coord) => parseInt(coord));
        const p2 = this.inputTwoRef.current.value.split(";").map((coord) => parseInt(coord));
        this.props.updatePoints(p1, p2);
    }

    static propTypes = {
        p1: Proptypes.arrayOf(Proptypes.number).isRequired,
        p2: Proptypes.arrayOf(Proptypes.number).isRequired,
    }

    calculateDistance()
    {
        const p1 = this.props.p1;
        const p2 = this.props.p2;

        return Math.sqrt(
            p1.map((coord, _i) => (coord = p2[_i]) ** 2)
                .reduce((sum, diff) => sum + diff, 0)
        ).toFixed(2);
    }

    render()
    {
        // const {pointA, pointB, distance, amount} = this.state;
        return(
            <div>
                <h1>Line</h1>
                <p>Point 1: {this.props.p1.join(";")}</p>
                <p>Point 2: {this.props.p2.join(";")}</p>

                <p>Dimension: {this.props.p1.length}</p>

                <p>Euclidean Distance: {this.calculateDistance()}</p>
            </div>
        );
    }
}

export default Line;