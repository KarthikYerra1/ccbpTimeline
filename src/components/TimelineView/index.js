import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const items = timelineItemsList.map(each => ({
    title: each.title,
  }))

  const getComponent = each => {
    const {categoryId} = each

    if (categoryId === 'COURSE') {
      return <CourseTimelineCard key={each.id} details={each} />
    }
    return <ProjectTimelineCard key={each.id} details={each} />
  }

  return (
    <div className="app-container">
      <h1 className="my-journey-heading">
        MY JOURNEY OF <br />
        <span className="ccbp-heading">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={items}>
          {timelineItemsList.map(each => getComponent(each))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
