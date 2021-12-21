import { Layout } from '@/components/layout/Layout'
import type { NextPage } from 'next'
import tw from 'tailwind-styled-components'

const Div = tw.div`
  flex
  justify-center
  p-10
`

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Div>
        <span>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </span>
      </Div>
    </Layout>
  )
}

export default Home
