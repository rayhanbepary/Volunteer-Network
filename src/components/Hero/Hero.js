import React from 'react';

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hero-content">
                            <h2>i grow by helping people in need</h2>
                            <div className="searchBox">
                                <input type="text" placeholder="Search..."/>
                                <input type="submit" value="Search"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;