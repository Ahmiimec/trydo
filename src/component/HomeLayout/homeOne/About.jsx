import React, { Component } from "react";

class About extends Component{
    render(){
        let title = 'About',
        description = 'Blend is a digital agency passionate about storytelling, visual design, and technology. We collaborate with companies small to large around the world to help them engage their audiences and build brand awareness. ';
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/about1.png" alt="About Images"/>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                    </div>
                                    <div className="row mt--30 mt_sm--10">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Who we are</h3>
                                                <p>As a master brand builder, we become an amazing partner to help build your vision.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">What we do?</h3>
                                                <p>Our team can create amazing web experiences, beginning with deep market research, practical strategies, and professional execution. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;