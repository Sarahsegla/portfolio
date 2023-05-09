import React from "react";
import Carousel from "../../components/carousel/carousel";

function Projects () {
    return (
        <div>
            <h1 style={{ fontFamily: 'Bebas Neue' }}>
                My Projects
            </h1>
            <div className="slides">
                <Carousel />
                </div>
        </div>
    )
}

export default Projects;