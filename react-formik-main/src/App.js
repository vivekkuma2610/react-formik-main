import './App.css';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Authors from './components/Authors';
import Books from './components/Books';
import AddAuthor from './components/AddAuthor';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <>
    <h1 style={{color:"#d359ff"}}><i>Library Management System - Dashboard</i></h1>
    <div className="App">
      
<div className="side-bar">
   
  <Sidebar>
  <Menu
   menuItemStyles={{
    button: ({ level, active, disabled }) => {
      // only apply styles on first level elements of the tree
      if (level === 0)
        return {
          color: disabled ? '#f5d9ff' : '#d359ff',
          backgroundColor: active ? '#eecef9' : undefined,
        };
    },
  }}
  >
    <MenuItem component={<Link to="/" />}> Home</MenuItem>
    <MenuItem component={<Link to="/addbook" />}> Add Books</MenuItem>
    <MenuItem component={<Link to="/addauthor" />}> Add Authors</MenuItem>
    <MenuItem component={<Link to="/books" />}> Books</MenuItem>
    <MenuItem component={<Link to="/authors" />}> Authors</MenuItem>
  </Menu>
</Sidebar>
</div>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/addbook" element={<AddBook />} />
    <Route path="/addauthor" element={<AddAuthor />} />
    <Route path="/books" element={<Books />} />
    <Route path="/authors" element={<Authors />} />
    <Route path="/books/edit/:bookid" element={<EditBook />} />
    <Route path="/authors/edit/:authorid" element={<EditAuthor />} />
</Routes>

    </div>
    </>
  );
}

export default App;
