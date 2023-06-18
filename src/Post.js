import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({posts}) => {
  return (
    <main className='post'>
        <Link to={`post/${posts.id}`}>
          <h2>{posts.title}</h2>
          <p className='datetime'>{posts.datetime}</p>
        </Link>
        <p className='postbody'>{
            (posts.body).length <=10 ? posts.body : `${(posts.body).slice(0,20)}...`
        }</p>
    </main>
  )
}

export default Post