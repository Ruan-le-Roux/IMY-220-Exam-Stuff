import React from "react";

import Line from "./Line";
import PointInput from "./PointInput";

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state={
            pointA: [],
            pointB: [],
        }
    }

    setPointA = (pointA) => {
        this.setState({pointA: pointA});
        console.log("point a", this.state.pointA);
    }
    
    setPointB = (pointB) => {
        console.log("point b", this.state.pointB);
        this.setState({pointB: pointB});
    }

    render()
    {
        return(
            <div>
                <h1>IMY 220 Sem test 1</h1>
                {/* <p>here: {this.state.pointA && this.state.pointB }</p> */}

                <PointInput setPointA={this.setPointA} setPointB={this.setPointB}/>
                {console.log(`state of pointA in app: ${this.state.pointA}`)}

                <Line pointA={this.state.pointA} pointB={this.state.pointB}/>
                
            </div>
        );

    }

    

}

export default App;