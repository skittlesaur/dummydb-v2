import AppLayout from '@layouts/app'
import Home from '@components/home'
import SEO from '@components/seo'

const HomePage = (props: any) => {
  return (
    <AppLayout>
      <SEO
        title="dummyDB"
      />
      <Home {...props} />
    </AppLayout>
  )
}

export const getStaticProps = async () => {
  const releases = await fetch('https://api.github.com/repos/skittlesaur/dummydb/releases')
  const releasesData = await releases.json()

  return {
    props: {
      github: {
        releases: releasesData,
      },
    },
  }
}

export default HomePage