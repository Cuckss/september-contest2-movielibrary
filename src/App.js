import React,{useState} from "react";
import {useEffect} from "react";
import SearchBooks from "./Components/SearchBooks";
import GetBooksList from "./Components/GetBooksList";
import axios from "axios";
import "./style.css"

const App=()=>{
    const[books,setBooks]=useState([]);
    return(
        <div>
            <SearchBooks setBooks={setBooks}/>
         <GetBooksList books={books} />
        </div>
    )
}
export default App;