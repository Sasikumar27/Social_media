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
  //localStorage.setItem('thoughts', JSON.stringify(posts))
  
  useEffect( ()=> { 
    setPosts(JSON.parse(localStorage.getItem('thoughts')))
  },[]) 

  useEffect( ()=> {
    if(posts.length){
      const filterdResults = posts.filter( (post) =>
      ( (post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()))
      setSearchresult(filterdResults.reverse()) 
    }else{
      <Missing />
    }
    }, [posts,search])  

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length-1].id +1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newpost = {
      id, title: posttitle, datetime, body: postbody
    }
    try{
    const allposts = [...posts,newpost]
    setPosts(allposts)
    localStorage.setItem('thoughts', JSON.stringify(allposts))
    setPosttitle('')
    setPostbody('')
    navigate('/')
    }catch(err){
      console.log(err.message)
    }
  }

  const handleEdit =(id) =>{
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const updatepost = {
    id, title: edittitle, datetime, body: editbody}
    try{ 
      setPosts(posts.map(post => (post.id) === id ? updatepost : post))
      setEdittitle('')
      setEditbody('')
      navigate('/') 
    }catch(err){
      console.log(`Error: ${err.message}`)
    }finally{
      localStorage.setItem('thoughts', JSON.stringify(posts))
    }
  } 
    
  const handleDelete = (id) =>{
    try{
    const postlist = posts.filter(post => post.id !== id)
    setPosts(postlist)
    localStorage.setItem('thoughts', JSON.stringify(postlist))
    navigate('/')
    }catch(err){
      console.log(err.message)
    }
  }
  return ( 
    <div className="App">   
      <Header title="Your Thoughts"/>
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
        <Route path="/post/:id" element={<PostPage
        posts={posts}
        handleDelete={handleDelete}/>}/>
        <Route path="post/edit/:id" element ={<Editpost 
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
