import React from 'react';
import {PropTypes} from 'prop-types';

class Line extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state ={
            pointA: this.props.pointA,
            pointB: this.props.pointB,
            // pointA: [1,2],
            // pointB: 0,
            distance: 0,
            amount: 0,

        };

        this.getDistance = this.getDistance.bind(this);
    }

    componentDidMount()
    {
        console.log(`points in line: ${this.state.pointA} & ${this.state.pointB}`);
        this.getDistance();
    }

    componentDidUpdate(prevProps)
    {
        if(prevProps.pointA !== this.props.pointA || prevProps.pointB !== this.props.pointB)
        {
            this.setState(
                {
                    pointA: this.props.pointA,
                    pointB: this.props.pointB
                },
                () => {
                    this.getDistance();
                }
            );
        }
    }


    getDistance()
    {
        const {pointA, pointB} = this.state;
        const size = pointA.length;
        this.setState({amount: size});

        console.log(`pointA in  line: ${pointA}`);


        const answerBefore = pointA.reduce((total, curr, index) => {
            return total + Math.pow(curr - pointB[index], 2);
        }, 0);

        console.log(`answer: ${answerBefore} && points ${pointA} & ${pointB}`);

        const finalAnswer = Math.sqrt(answerBefore);

        this.setState({distance: finalAnswer});
    }

    // doCalculation(total, curr, index)
    // {
        
    // }

    render()
    {
        const {pointA, pointB, distance, amount} = this.state;
        return(
            <div>
                <h1>Line</h1>
                <p>Point 1: {pointA.join(";")}</p>
                {/* <p>Point 1: {pointA}</p> */}
                <p>Point 2: {pointB.join(";")}</p>
                <p>Dimension: {amount}</p>
                {/* <p>Euclidean Distance: {Math.round(distance * 100)/100}</p> */}
                <p>Euclidean Distance: {this.getDistance}</p>
            </div>
        );
    }



}

Line.defaultProps = {
    pointA: [1,2],
    pointB: [1,2],

}

Line.prototypes = {
    pointA: PropTypes.arrayOf(PropTypes.number).isRequired,
    pointB: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Line;