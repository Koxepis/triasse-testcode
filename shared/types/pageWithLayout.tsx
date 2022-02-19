import { NextPage } from 'next'
import User from '../../components/layouts/user'

type PageWithGuestLayoutType = NextPage & { layout: typeof User }

type PageWithLayoutType = PageWithGuestLayoutType

export default PageWithLayoutType
