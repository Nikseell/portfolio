const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/40 backdrop-blur-xs">
      <div className="w-full h-16 flex items-center justify-between px-20">
        <p className="text-2xl uppercase w-58">Niklavs Laicans</p>
        <div className="flex gap-12">
          {['Home', 'Experience', 'Work', 'Contact'].map((title, i) => (
            <a>/{title}</a>
          ))}
        </div>
        <div className="flex justify-end w-58">
          <button className="border py-2 px-4">Contact me</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
