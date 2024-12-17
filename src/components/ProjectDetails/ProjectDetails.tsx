import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../data/ProjectsList';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{  id: string}>();
  const projectIndex = id ? parseInt(id) : 0;
  const project = projects[projectIndex];

  const ProjectComponent = project?.component;

  return (
    <div>
      {/* <h1>{project?.name}</h1> */}
      {ProjectComponent ? <ProjectComponent /> : <p>Project component not found.</p>}
    </div>
  );
};

export default ProjectDetails;