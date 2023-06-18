import React from 'react'

const NewPost = ({handleSubmit, posttitle, setPosttitle, postbody, setPostbody}) => {
  return (
    <main className='newpost'>
        <h5>New post</h5>
        <form className='newpostform' onSubmit={handleSubmit}>
            <label htmlFor='posttitle'>Title</label>
            <input
                id='posttitle'
                type='text'
                required
                placeholder='type title'
                value={posttitle}
                onChange={ e => setPosttitle(e.target.value)}
            ></input>

            <label htmlFor='postbody'>Body</label>
            <input
                id='postbody'
                type='text'
                required
                placeholder='type content'
                value={postbody}
                onChange={ e => setPostbody(e.target.value)}
            ></input>
            <button type='submit' onClick={handleSubmit}> Submit</button>
        </form>
    </main>
  )
}

export default NewPost