import React from 'react';

import ProjectCard from './ProjectCard/ProjectCard';

import { Projects } from './ConstProjec';

console.log(Projects, "====")


const Works = () => {
  return (
    <content className="project-wrapper">
      <article className="proj-article">
        <h1>PROJECTS</h1>
        <div className="proj-cont">
          {
            Projects.map((data, index) => {
              return (
                <ProjectCard key={index} {...data} />
              );
            })
          }

        </div>
      </article>
    </content>

  );
}

export default Works;