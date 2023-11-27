import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';

const baseURL = "http://testapi.test/api/books";

function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/20`).then((response) => {
      setPost(response.data)
    });
  }, []);

  if (!post) return null;

  return (
    <div className="App">
      <h1>{post.name}</h1>
    </div>
  );
}

export default App;
