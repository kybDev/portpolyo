import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className="project-card">

      <div className="card-title">
        <div className="proj-name">
          <h3>{ props.name }</h3>
          <a href={ props.url }>{ props.url }</a>
        </div>
      </div>

      <div className="card-body">
        <div className="proj-info">
          <p>{ props.description }</p>
        </div>
        <div className="tech-tags">
          <h5>Technology Stack</h5>
          <ul>
            {
              props.tags.map((tag, key) => {
                return <li key={ key }>{ tag }</li>;
              })
            }
          </ul>
        </div>
      </div>

    </div>
  );
}

export default ProjectCard;