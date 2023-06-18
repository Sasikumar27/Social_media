import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

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
    <main className='newpost'>
      {edittitle &&
      <>
        <h2>Edit post</h2>
        <form className='newpostform' onSubmit={(e) =>
         e.preventDefault()}>
        <label htmlFor='posttitle'>Title</label>
            <input
                id='posttitle'
                type='text'
                required
                placeholder='edit title'
                value={edittitle}
                onChange={ e => setEdittitle(e.target.value)}
            ></input>

            <label htmlFor='postbody'>Body</label>
            <input
                id='postbody'
                type='text'
                required
                placeholder='Edit content'
                value={editbody}
                onChange={ e => setEditbody(e.target.value)}
            ></input>
            <button type='submit'
              onClick={ () => handleEdit(post.id)}
            > Submit</button>
        </form>
      </>
      }
      {!edittitle &&
        <>
          <h2>Post not Found</h2>
        </>
      }
    </main>
  )
}

export default Editpost