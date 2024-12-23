import React, { useState } from 'react'
import NewsList from './NewsList';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';

function News() {
  const [category,setCategory] =useState("");
  const categories = ['general','technology','sports','health','science','business'];
  return (
    <div>
      <ResponsiveAppBar/>
      <h1>News-App</h1>
      <nav>
        {categories.map( (cat) => (
          <button key={cat}
          onClick={() => setCategory(cat)}
          style={{
            margin:"5px",
            padding:"7px",
            backgroundColor: category === cat ? "#007bff":"f8f9fa",
            color: category === cat?"white":"black",
            border:"1px solid #ddd",
            borderRadius:"5px",
            cursor:"pointer"
         }}>
         {cat.toUpperCase()}
          </button>
      ))}
      </nav>
      <NewsList category={category}/>
    </div>
  )
}
export default News