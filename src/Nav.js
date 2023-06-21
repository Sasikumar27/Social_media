import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const nav = ({search,setSearch}) => {
  return (
    <>
    <Navbar className='fullnav' >
      <Container>
        <Navbar.Brand  href="/">Home</Navbar.Brand>
        <form className='text-center' onSubmit={(e)=> e.preventDefault()}>
            <label className='search' htmlFor='search'>Search posts</label>
            <div className='sea'>
              <input 
                className='searchbox'
                type='text'
                placeholder="Search posts"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            /></div>
        </form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="navbr">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/post">New Posts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default nav