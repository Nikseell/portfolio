const Navigation = () => {
  return (
    <nav className="fixed top-0 max-w-330 w-full z-50 bg-bg">
      <div className="w-full mx-auto h-20 flex items-center uppercase justify-between">
        <p className="text-md">Niklavs Laicans</p>
        <div className="flex gap-12">
          {['Home', 'Experience', 'Work', 'Contact'].map((title, i) => (
            <a>{title}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
