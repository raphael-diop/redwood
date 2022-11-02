import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <main>
        <p>
          This site as being created to allowed u to share your BEST nature spots, so other users can
          visit them.
        </p>
      </main>
    </>
  )
}

export default AboutPage
