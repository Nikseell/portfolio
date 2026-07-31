const Footer = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <p className="max-w-xl text-xl">
          Glad you stopped by. Whether you have something on your mind or just want to connect, my inbox is open. Don't
          be a stranger.
        </p>
        <a
          href="mailto:niklavs.laicans@gmail.com"
          className="text-3xl font-medium"
        >
          niklavs.laicans@gmail.com
        </a>
      </div>
      <p className="uppercase font-bold text-[176px] leading-40 tracking-tight bg-linear-to-t from-black to-white bg-clip-text text-transparent">
        Niklavs Laicans
      </p>
      <div className="flex flex-col gap-4">
        <div className="bg-text-muted w-full h-px" />
        <p>© {new Date().getFullYear()} Niklavs Laicans. All rights reserved</p>
      </div>
    </section>
  )
}

export default Footer
