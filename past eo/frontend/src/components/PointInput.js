import React from 'react';

class PointInput extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state={
            pointA: '',
            pointB: '',
        }

        this.handleChangeA = this.handleChangeA.bind(this);
        this.handleChangeB = this.handleChangeB.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleChangeA = (e) => {
        // this.props.setPointA(e.target.value);
        this.setState({pointA: e.target.value});
    };

    handleChangeB = (e) => {
        this.setState({pointB: e.target.value});
    };
    
    handleSubmit(e)
    {
        const {pointA, pointB} = this.state;
        e.preventDefault();
        
        console.log('pointA: ', pointA);
        
        
        const tempA = pointA.split(';');
        const tempB = pointB.split(';');
        console.log("tempA", tempB);
        
        const intA = tempA.map(temp => parseInt(temp, 10));
        const intB = tempB.map(temp => parseInt(temp, 10));
        console.log("intA", tempB);

        // const test = "123";
        
        this.props.setPointA(intA);
        this.props.setPointB(intB);
        // this.setState({pointA: tempA, pointB: tempB});
        
    }

    render()
    {
        return(
            <div>
                <h1>Point Input</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Point A:
                        <input type='text' name='pointA' onChange={this.handleChangeA}/>
                    </label>

                    <label>
                        point B:
                        <input type='text' name='pointB' onChange={this.handleChangeB}/>

                    </label>

                    <button type='submit'>Submit!</button>
                </form>
            </div>
        );
    }

}

export default PointInput;