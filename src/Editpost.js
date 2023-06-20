import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'

const Editpost = ({posts, handleEdit, edittitle, editbody, setEdittitle, setEditbody}) => {
  const {id} = useParams()
  const post = posts.find(post => (post.id).toString() === id)

  useEffect(() => {
      if(post) {
          setEditbody(post.body)
          setEdittitle(post.title)
      }
  }, [post,setEditbody, setEdittitle])
  
  return (
    <main >
      {edittitle &&
      <div className='login-box'>
        <h2>Change your Thought</h2>
        <form className='user-box' onSubmit={(e) =>
         e.preventDefault()}>
          <label htmlFor='posttitle'></label>
            <input
                id='posttitle'
                type='text'
                required
                placeholder='edit title'
                value={edittitle}
                onChange={ e => setEdittitle(e.target.value)}
            ></input>

            <label htmlFor='postbody'>Name</label>
            <input
                id='postbody'
                type='text'
                required
                placeholder='Edit content'
                value={editbody}
                onChange={ e => setEditbody(e.target.value)}
            ></input>
            <Button className='mx-3' variant="outline-primary" type='submit'
              onClick={ () => handleEdit(post.id)}
            > Submit</Button>
        </form>
      </div>
      }
      {!edittitle &&
        <>
          <h3 className='Nopost'>Post not Found</h3>
        </>
      }
    </main>
  )
}

export default Editpost