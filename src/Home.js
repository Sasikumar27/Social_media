import Feed from './Feed'

const Home = ({posts, fetchError, isLoading}) => {
  return (
    <main className='home'>
        {isLoading &&
            <p>Loading Posts.....</p>}
        {!isLoading && fetchError &&
            <p>{fetchError}</p>
        }
        {!isLoading && !fetchError &&
        (posts.length ? (
            <Feed posts={posts} />
        ):<p>
            There is no posts available
        </p>)}
    </main>
  )
}

export default Home