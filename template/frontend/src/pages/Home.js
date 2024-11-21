import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <h1>Hello Home Page!</h1>

                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
            </div>
        );
    }

}

export default Home;