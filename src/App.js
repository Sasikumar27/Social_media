import { format } from "date-fns";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import api from "./api/posts"
import Editpost from "./Editpost";

function App() {
  const [search, setSearch] = useState('')
  const [searchresult, setSearchresult] = useState([])
  const [posttitle, setPosttitle] = useState('')
  const [postbody, setPostbody] = useState('')
  const [edittitle, setEdittitle] = useState('')
  const [editbody, setEditbody] = useState('')
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  
  useEffect( ()=> {
    const fetchposts = async() => {
      try{
        const response = await api.get('/posts')
        setPosts(response.data)
      }catch(err){
        if(err.response){
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        }
        else{
          console.log(`Error: ${err.message}`)
        }
      }
    }
    fetchposts()
  }, [])

  useEffect( ()=> {
    const filterdResults = posts.filter( (post) =>
    ( (post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()))

    setSearchresult(filterdResults.reverse())
  }, [posts,search])

  const handleSubmit = async(e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length-1].id +1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newpost = {
      id, title: posttitle, datetime, body: postbody
    }
    try{
    const response = await api.post('/posts', newpost)
    const allposts = [...posts, response.data]
    setPosts(allposts)
    setPosttitle('')
    setPostbody('')
    navigate('/')
    }catch(err){
      console.log(err.message)
    }
  }

  const handleEdit = async (id) =>{
    try{
      const datetime = format(new Date(), 'MMMM dd, yyyy pp')
      const updatepost = {
      id, title: edittitle, datetime, body: editbody
      }
      const response = await api.put(`/posts/${id}`, updatepost)
      setPosts(posts.map(post => (post.id) === id ? {...response.data} : post))
      setEdittitle('')
      setEditbody('')
      navigate('/')
    }catch(err){
      console.log(`Error: ${err.message}`)
    }
  } 

  const handleDelete = async(id) =>{
    try{
    await api.delete(`/posts/${id}`)
    const postlist = posts.filter(post => post.id !== id)
    setPosts(postlist)
    navigate('/')
    }catch(err){
      console.log(err.message)
    }
  }
  return ( 
    <div className="App">   
      <Header title="Nazi"/>
      <Nav 
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element = {<Home 
          posts={searchresult}
        />} />
        <Route path="/post" element = {<NewPost 
          handleSubmit={handleSubmit}
          posttitle={posttitle}
          postbody={postbody}
          setPosttitle={setPosttitle}
          setPostbody={setPostbody}
        />} />
        <Route path="/post/:id" element={<PostPage posts={posts}
        handleDelete={handleDelete}/>}/>
        <Route path="/edit/:id" element ={<Editpost 
          posts={posts} 
          handleEdit={handleEdit}
          editbody={editbody}
          edittitle={edittitle}
          setEditbody={setEditbody}
          setEdittitle={setEdittitle}
        />} />
        <Route path="/postpage" element = {<PostPage />} />
        <Route path="/about" element = {<About />} />
        <Route path="*" element = {<Missing />} />
      </Routes>
      <Footer />  
    </div> 
  );
}

export default App;
