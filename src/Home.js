import Feed from './Feed'
import {Button, Nav}  from 'react-bootstrap'

const Home = ({posts, fetchError, isLoading}) => {
    fetchError=false
    isLoading=false    
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
        ((posts.length) ? (
            <Feed posts={posts} />
        ): 
        <>
        <hr />
        <h2 className='Nopost'>Welcome ❤️</h2>
              <h5 className='text-center'> 
                Create your First post..!
              </h5>
              <div  className=' p-3 text-center'>
              <Button variant='secondary'>
              <Nav.Link href="/post">New Posts</Nav.Link>
              </Button></div>
        </>)}
    </main>
  )
}

export default Home