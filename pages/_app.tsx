import '../styles/globals.css'
import PageWithLayoutType from '../shared/types/pageWithLayout'
import User from '../components/layouts/user'

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || User

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
