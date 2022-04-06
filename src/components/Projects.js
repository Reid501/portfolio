import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import sanityClient from '../client.js';
import { Link } from 'react-router-dom';

function Projects() {

  const [project, setProject] = useState(null);

  useEffect( () => {
    sanityClient.fetch(`*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`)
    .then((data) => setProject(data))
    .catch(console.error);
  }, [])

  return (
    <div class="projects">
      <section>
        <h1>PROJECTS</h1>
        {project && project.map((project, index) => (
        <Link to={`/projects/${project.slug.current}`} key={project.slug.current}>
          <h3>{project.title}</h3>
          <img src={project.mainImage.asset.url} alt={project.mainImage.alt} />
        </Link>
        ))}

        

      </section>
    </div>
  )
}

export default Projects