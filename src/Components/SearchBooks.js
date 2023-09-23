import React ,{useState}from "react";
import {useEffect} from "react";
import axios from "axios";
const SearchBooks=({setBooks})=>{
   
   useEffect(renderBooks,[])
   
   const[searchTerm,setSearchTerm]=useState('');
   async function renderBooks(){
      try{
         let response=await axios.get("https://www.googleapis.com/books/v1/volumes",{
         params:{
           key:"AIzaSyByStvWqYa0M2-QMp6lMefRdphlIS8ICtA",
            q:`${searchTerm} || "Harry+potter"`,
           
         }
         
      })
      .then(response=>
         {console.log(response.data.items)
          setBooks(response.data.items)
         });
      }catch(err){
         
       console.log(err);
      }
     
   }
   
 return(
    <div>
      <input type="text" placholder="Search Books" onChange={(e)=>setSearchTerm(e.target.value)} />
      <button onClick={renderBooks}>Search</button>
    </div>
 )
}
export default SearchBooks;