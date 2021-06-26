import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'
import Product from '../views/Product'
import Help from '../views/Help'
import AboutUs from '../views/AboutUs'

export type RouterType = {
  path: string
  component?: React.FC<any>
  routes?: RouterType[]
  exact?: boolean
  redirect?: string
}

const routers: RouterType[] = [
  {
    path: '/product',
    component: Product
    // routes: [
    //   {
    //     path: "/recommend/:id",
    //     component: Album
    //   }
    // ]
  },
  {
    path: '/help',
    component: Help
  },
  {
    path: '/about-us',
    component: AboutUs
  },
  {
    path: '/',
    exact: true,
    redirect: '/product'
  }
]

export default routers
