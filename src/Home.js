import Feed from './Feed'

const Home = ({posts, fetchError, isLoading}) => {
  return (
    <main className='home'>
        {isLoading &&
        <>
            <div id="loadingpage">
                <div id='circle'></div>
                <p id='loading'>Loading Posts.....</p>
            </div>
        </>
        }    
        {!isLoading && fetchError &&
            <p>{fetchError}</p>
        }
        {!isLoading && !fetchError &&
        (posts.length ? (
            <Feed posts={posts} />
        ):<p className='Nopost'>
            There is no posts available
        </p>)}
    </main>
  )
}

export default Home