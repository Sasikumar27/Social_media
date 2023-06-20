import React from 'react'
import Card from 'react-bootstrap/Card';

const Post = ({posts}) => {
  return (
          <div className='posts'>
              <Card style={{width: '30rem' }} className='mx-5 my-2'>
                <Card.Body className='p-3 '>
                  <Card.Title>{posts.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{posts.datetime}</Card.Subtitle>
                  <Card.Text >
                    {(posts.body).length <=10 ? posts.body : `${(posts.body).slice(0,20)}...`}
                  </Card.Text>
                  <Card.Link href={`post/${posts.id}`} >View Post</Card.Link>
                </Card.Body>
              </Card>
          </div>
  )
}

export default Post