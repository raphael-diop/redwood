import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <main>
        <p>
          Welcome to Naturia, this blog of the nature lovers.
        </p>
      </main>
      <ArticlesCell />
    </>
  )
}

export default HomePage
