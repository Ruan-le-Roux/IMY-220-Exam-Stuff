import React from "react";

import Line from "./Line";
import PointInput from "./PointInput";

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state={
            p1: [0, 0],
            p2: [0, 0],
        };

        this.updatePoints = this.updatePoints.bind(this);
    }

    updatePoints(p1, p2)
    {
        this.setState({p1, p2});
    }

    render()
    {
        return(
            <div>
                <h1>IMY 220 Sem test 1</h1>

                <PointInput updatePoints={this.updatePoints}/>

                <Line p1={this.state.p1} p2={this.state.p2}/>
                
            </div>
        );
    }   
}

export default App;