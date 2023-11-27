import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';

const baseURL = "http://testapi.test/api/books";
// const baseURL = "http://testapi.test/api/books/1";


function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    });
  }, []);

  if (!post) return null;

  return (
    <div className="App">
    {post.map((post) => (
      <div key={post.id}>
        <h1>{post.name}</h1>
      </div>
    ))}

    {/* <h1>{post.name}</h1> */}
  </div>
  );
}

export default App;
