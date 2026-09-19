import Default from '../assets/projects/github-traffic-frontend.png'
import type { Work } from '../types/work'

const WorkCard = (props: Work) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex flex-1 flex-col gap-4 py-1">
        <p className="max-w-xl lg:text-xl leading-snug">{props.description}</p>
        <div className="flex gap-4 items-center uppercase text-sm pb-4">
          {props.tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center gap-4"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-link
          className="block aspect-square sm:aspect-auto lg:aspect-7/4 xl:aspect-3/2 2xl:aspect-auto overflow-hidden group"
        >
          <img
            src={props.image || Default}
            alt={props.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </a>
        <div className="flex justify-between items-center pt-4">
          <p className="uppercase text-base lg:text-xl">{props.title}</p>
          <p className="text-text-muted">{props.year}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
