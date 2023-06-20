import { ReactNode } from 'react'

export interface IRoute {
  path: string
  title?: string
  component?: ReactNode
  children?: IRoute[]
  layout?: boolean
  redirect?: string
}
