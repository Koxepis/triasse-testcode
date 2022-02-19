import { NextPage } from 'next'
import Default from '../../components/layouts/default'
import User from '../../components/layouts/user'

type PageWithDefaultLayoutType = NextPage & { layout: typeof Default }
type PageWithGuestLayoutType = NextPage & { layout: typeof User }

type PageWithLayoutType = PageWithGuestLayoutType | PageWithDefaultLayoutType

export default PageWithLayoutType
