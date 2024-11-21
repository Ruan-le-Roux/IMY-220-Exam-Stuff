import React from "react";

class EditPost extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state={
            title: this.props.title,
            description: this.props.description,
        }
    }

    handleChange = (e) =>
    {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) =>
    {
        const {title, description} = this.state;
        e.preventDefault();

        this.props.handleChange(title, description);
    }


    render()
    {
        const {title, description} = this.state;

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>Post Title</p>
                        <input type='text' name='title' onChange={this.handleChange} value={title}/>
                    </label>

                    <label>
                        <p>Post Description</p>
                        <input type='text' name='description' onChange={this.handleChange} value={description}/>
                    </label>

                    <button type='submit'>Save</button>
                </form>
            </div>
        );
    }

}

export default EditPost;