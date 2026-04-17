const Navigation = () => {
  return (
    <nav className="fixed top-0 max-w-360 w-full z-50">
      <div className="w-full mx-auto h-20 flex items-center gap-20 uppercase">
        <h2 className="leading-[0.9] font-bold text-2xl">Niklavs.dev</h2>
        <a>01/Home</a>
        <a>02/Experience</a>
        <a>03/Work</a>
        <a>04/Contact</a>
      </div>
    </nav>
  )
}

export default Navigation
