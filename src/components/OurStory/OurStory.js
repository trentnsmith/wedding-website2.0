import React, { Component } from 'react';
import './OurStory.css';

// import Met from '../I
// import Chicago from '../Img';
// import Hawaii from '../Img';
// import SouthDakota from '../Img';
import scriptown from '../scriptown.jpg';


class Story extends Component {
    constructor() {
        super();
        this.state = {
            stories: []
        };
    };

    componentWillMount() {
        this.setState({
            stories: [
                {
                    key: 1,
                    title: 'How We Met',
                    imgUrl: scriptown,
                    story: `testing`
                },
                {
                    key: 2,
                    title: 'First Date',
                    imgUrl: scriptown,
                    story: `testing`
                },
                {
                    key: 3,
                    title: 'In Between',
                    imgUrl: scriptown,
                    story: `testing`
                },
                {
                    key: 4,
                    title: 'Engagement',
                    imgUrl: scriptown,
                    story: `testing`
                }

            ]
        })
    }

    render() { 
        let stories;

        if (this.state.stories && this.state.stories.length) {
            stories = this.state.stories.map(story => {
                return <Story key={story.key} story={story}/>
            });
        };

        return (
            <section className="section section-our-story">
                <div className="container">
                    <h2>Our Story</h2>
                    {stories}
                </div>
            </section>
        );
    }
}
 
export default Story;