import Companies from '@/pages/Companies'
import Company from '@/pages/Company'
import { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
    {
        path: '/',
        Component: Companies,
    },
    {
        path: '/company/:id',
        Component: Company,
    },
]

export default routes
