const Footer = () => {
  return (
    <section className="flex flex-col gap-4 lg:gap-10">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
        <p className="max-w-xl md:text-xl">
          Glad you stopped by. Whether you have something on your mind or just want to connect, my inbox is open. Don't
          be a stranger.
        </p>
        <a
          href="mailto:niklavs.laicans@gmail.com"
          className="md:text-2xl xl:text-3xl"
        >
          niklavs.laicans@gmail.com
        </a>
      </div>
      <div className="@container">
        <p className="uppercase font-bold text-[clamp(36px,11.4cqi,176px)] leading-none tracking-tight bg-linear-to-t from-black to-white bg-clip-text text-transparent">
          Niklavs Laicans
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-text-muted w-full h-px" />
        <p className="text-sm md:text-base">© {new Date().getFullYear()} Niklavs Laicans. All rights reserved</p>
      </div>
    </section>
  )
}

export default Footer
