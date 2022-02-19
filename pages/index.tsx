import User from '../components/layouts/user'
import PageWithLayoutType from '../shared/types/pageWithLayout'

const Home: React.FC = () => {
  return (
    <>
      <div className="">Testing</div>
    </>
  )
}

;(Home as PageWithLayoutType).layout = User

export default Home
