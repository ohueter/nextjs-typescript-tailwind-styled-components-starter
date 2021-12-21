import Head from 'next/head'
import { FunctionComponent } from 'react'

export type LayoutProps = {
  title?: string
}

export const Layout: FunctionComponent<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <header>
        <nav></nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}
