import Default from '../assets/projects/github-traffic-frontend.png'
import type { Work } from '../types/work'

const WorkCard = (props: Work) => {
  return (
    <div className="flex">
      <div className="flex flex-1 flex-col gap-4 py-1">
        <p className="text-xl font-medium max-w-xl">{props.description}</p>
        <div className="flex gap-4 items-center uppercase">
          {props.tags.map((tag) => (
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="aspect-6/3 overflow-hidden group">
          <img
            src={props.image || Default}
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="flex justify-between items-center pt-8">
          <p className="uppercase font-medium text-xl">{props.title}</p>
          <p className="text-text-muted">{props.year}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
