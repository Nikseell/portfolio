function NavItem({ number, title }: { number: number; title: string }) {
  return (
    <a>
      <span className="text-[#919191]">0{number}/</span>{title}
    </a>
  )
}

const Navigation = () => {
  return (
    <nav className="fixed top-0 max-w-360 w-full z-50">
      <div className="w-full mx-auto h-20 flex items-center gap-20 uppercase">
        <h2 className="leading-[0.9] font-bold text-2xl">Niklavs.dev</h2>
        {['Home', 'Experience', 'Work', 'Contact'].map((title, i) => (
          <NavItem
            key={title}
            number={i + 1}
            title={title}
          />
        ))}
      </div>
    </nav>
  )
}

export default Navigation
