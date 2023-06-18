import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PostPage = ({posts, handleDelete}) => {
  const {id} = useParams()
  const post = posts.find(post => (post.id).toString()===id)
  return (
    <main className='postpage'>
        <article className='post'>
          {post && 
            <>
              <h2>{post.title}</h2>
              <p className='postdate'>{post.datetime}</p>
              <p className='postbody'>{post.body}</p>
              <Link to={`/edit/${id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={()=>
              handleDelete(post.id)}>
                Delete
              </button>
            </>
          }
          {!post &&
            <>
              <h2>post not found </h2>
            </>
          }

        </article>
    </main>
  )
}

export default PostPage