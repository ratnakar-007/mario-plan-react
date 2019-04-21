import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return(
       <div className="container section project-details">
           <div className="card z-depth-0">
                <div className="card-content">
                    <span className='card-title'>Project Title - { id }</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque sequi aspernatur inventore magnam libero itaque id, repellat architecto odio quaerat aperiam eaque dolore? Odio deleniti quia voluptates sapiente nulla vel?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by net ninja.</div>
                    <div>11 Apr, 2PM</div>
                </div> 
           </div>
       </div> 
    )
}

export default ProjectDetails;