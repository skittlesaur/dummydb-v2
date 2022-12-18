import Grid from '@components/home/grid'
import Hero from '@components/home/hero'

const Home = (props: any) => {
  return (
    <>
      <div className="flex flex-col relative z-10">
        <Hero {...props} />
      </div>
      <Grid />
    </>
  )
}

export default Home