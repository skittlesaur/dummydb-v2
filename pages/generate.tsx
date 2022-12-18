import AppLayout from '@layouts/app'
import Generate from '@components/generate'
import SEO from '@components/seo'

const GeneratePage = () => {
  return (
    <AppLayout>
      <SEO title="dummyDB - Generate" />
      <Generate />
    </AppLayout>
  )
}

export default GeneratePage