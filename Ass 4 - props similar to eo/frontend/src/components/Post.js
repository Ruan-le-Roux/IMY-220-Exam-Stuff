import React from 'react';

import EditPost from './EditPost';

class Post extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state={
            edit: false,
            title: this.props.title,
            description: this.props.description,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    // componentDidUpdate(prevProps)
    // {
    //     if(prevProps.title !== this.props.title || prevProps.description !== this.props.description)
    //     {
    //         this.setState({title: this.props.title, description: this.props.description});

    //         console.log(`prev: ${prevProps.title}, ${prevProps.description} && curr: ${this.state.title}, ${this.state.description}`);
    //     }
    // }
    
    handleClick = () =>
    {
        const {edit, title, description} = this.state;
        
        if(edit === true)
        {
            this.setState({edit: false});                        
        }
        else
        {
            this.setState({edit: true});
        }
        
    }
        
    handleChange = (newTitle, newDescription) =>
    {
        this.setState({title: newTitle, description: newDescription});
        console.log(`curr: ${this.state.title}, ${this.state.description}`);
        this.handleClick();
    }

    render()
    {
        const {edit, title, description}= this.state;
        // if(this.state.edit === true)
        // {
        //     return <EditPost title={title} description={description} edit={this.handleChange}/>
        // }

        return(
            <div>
                <h1>{title}</h1>
                <p>{this.props.author}</p>
                <hr/>
                <p>{description}</p>
                <button onClick={this.handleClick}>Edit Post</button>

                {edit && <EditPost title={title} description={description} handleChange={this.handleChange} handleClick={this.handleClick}/>}
            </div>
        );
    }

}

export default Post;