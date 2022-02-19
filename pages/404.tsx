import React from 'react'
import Default from '../components/layouts/default'
import PageWithLayoutType from '../shared/types/pageWithLayout'

export const NotFoundPage:React.FC = () => {
  return <div>404|Page Not Found</div>
}

(NotFoundPage as PageWithLayoutType).layout = Default
export default NotFoundPage
