import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  const {projectTitle, imageUrl, projectUrl, description, duration} = details

  return (
    <div className="course-card-container">
      <img src={imageUrl} className="thumbnail-image" alt="project" />
      <div className="heading-duration-container">
        <h1 className="card-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="clock-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="visit-link">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
