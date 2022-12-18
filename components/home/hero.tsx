import Github from '@components/home/github'
import Header from '@components/home/header'

interface Props {
  github: {
    releases: any[]
  }
}

const Hero = ({ github }: Props) => {
  return (
    <div className="w-full h-[70vh] grid md:grid-cols-[1fr_1.25fr] items-center gap-20">
      <Header />
      <Github {...github} />
    </div>
  )
}

export default Hero