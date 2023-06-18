import React from 'react'
import Feed from './Feed'

const Home = ({posts}) => {
  return (
    <main className='home'>
        { posts.length ? (
            <Feed posts={posts} />
        ):<p>
            There is no posts available
        </p>}
    </main>
  )
}

export default Home