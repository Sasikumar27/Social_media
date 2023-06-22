import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

const PostPage = ({posts, handleDelete}) => {
  const {id} = useParams()
  const post = posts.find(post => (post.id).toString()===id)
  return (
    <main className='postpage'>
          {post && 
            <>
              <div className='posts'>
                <Card style={{width: '30rem'}}           
                  className='mx-5 my-2'>
                  <Card.Body className='p-3 '>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{post.datetime}</Card.Subtitle>
                    <Card.Text >
                      {post.body}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="buttons">
                <Button href={`edit/${post.id}`}variant='outline-success'
                >Edit</  Button>
                <Button variant='outline-danger' onClick={()=>
                handleDelete(post.id)}>
                  Delete
                </Button>
              </div>
            </>
          }
          {!post &&
            <>
              <h2>{posts.title}</h2>
              <h2 className='Nopost'>Welcome ❤️</h2>
              <h5 className='text-center'> 
                Create your First post..!
                <Nav.Link href="/post">New Posts</Nav.Link>
              </h5>
            </>
          }
    </main>
  )
}

export default PostPage