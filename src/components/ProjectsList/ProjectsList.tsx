import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/ProjectsList';

type ProjectsListProps = {};

const ProjectsList: React.FC<ProjectsListProps> = () => {
 

    return (
        <div style={{justifyContent:'center', display:'flex'}}>
            <ul >
                {projects.map((project, index) => (
                    <Link to={`/project/${index}`}><li key={index} style={{textDecoration:'none'}}>{project.name}</li></Link>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsList;
