import React from "react";

import { Link } from "react-router-dom";

import Post from "../components/Post";

const postsArr = [
    {
        title: "Growing Your First Vegetable Garden",
        author: "Emma Stone",
        description: "A beginner's guide to planting and harvesting your own vegetables.",
    },
    {
        title: "Indoor Plant Care Tips",
        author: "James Miller",
        description: "How to keep your indoor plants thriving with minimal effort.",
    },
    {
        title: "Composting for Beginners",
        author: "Sarah Brown",
        description: "Learn how to create nutrient-rich compost for your garden.",
    },
    {
        title: "Creating a Pollinator-Friendly Garden",
        author: "Michael Green",
        description: "Tips on attracting bees, butterflies, and other pollinators to your garden.",
    },
    {
        title: "Seasonal Flower Gardening",
        author: "Linda Johnson",
        description: "A guide to planting flowers that bloom beautifully throughout the year.",
    },
];

class Posts extends React.Component
{
    constructor(props)
    {
        super(props);

        this.displayPosts = this.displayPosts.bind(this);

    }

    displayPosts()
    {
       

        
    }

    render()
    {
        return(
            <div>
                <h1>Hello posts Page!</h1>

                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>

                {postsArr.map((post, index) => (
                    <Post key={index} title={post.title} author={post.author} description={post.description}/>
                ))}
            </div>
        );
    }
}

export default Posts;