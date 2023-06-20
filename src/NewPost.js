import React from 'react'
import { Button } from 'react-bootstrap'

const NewPost = ({handleSubmit, posttitle, setPosttitle, postbody, setPostbody}) => {
  return (
    <main className='login-box'>
        <h2>Share your Thought</h2>
        <form className='user-box' onSubmit={handleSubmit}>
            <label htmlFor='posttitle'></label>
            <input
                id='posttitle'
                type='text'
                required
                //placeholder='type title'
                value={posttitle}
                onChange={ e => setPosttitle(e.target.value)}
            ></input>

            <label htmlFor='postbody'>Name</label>
            <input
                id='postbody'
                type='text'
                required
                placeholder="What's on your Mind?"
                value={postbody}
                onChange={ e => setPostbody(e.target.value)}
            ></input>
            <Button variant='outline-primary' type='submit' onClick={handleSubmit}> Submit</Button>
        </form>
    </main>
  )
}

export default NewPost