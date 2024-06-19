import React, { useState } from 'react'
import axios from 'axios';
import "./Search.css"

const Search = () => {
    const [query,setQuery]=useState("");
    const[result,setResult]=useState([]);

    const handle = async () => {
        console.log(query);
        try {
            const response = await axios.get(`http://localhost:5000/items/search?query=${query}`);
            console.log(response.data)
            setResult(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

  return (
    <>
    <div className="search-container">
    <input type="text" className="search-input" placeholder="Search..."
    onChange={(e)=>setQuery(e.target.value)}

    />
    <button className="search-button" onClick={handle}>Search</button>
</div>
<div className="search-results">
<ul>
      {result.map((item) => (
             <li key={item._id}>
                <h3>{item.name}</h3>
                 <p>{item.description}</p>
               </li>
                ))}
     </ul>
</div>
</>
  );
};

export default Search