import React,{useState} from "react";
import{useEffect} from "react";
import "../style.css"
const GetBooksList=({books})=>{
    return(
        <div>
          
            {
                books.map((book,index)=>(
                   <div className="main-div">{
                    index<3 ?(
                       
                        <div className="parent-div" >
                            <div className="bookscontainer-div">
                           <div>
                        <img src={book.volumeInfo.imageLinks.thumbnail} />
                        </div>
                        <div id="description-div">
                        <h1>{book.volumeInfo.title}</h1>
                        <p>{book.volumeInfo.description}</p>
                        <button><a href={book.volumeInfo.previewLink}  target="_blank"> Now Read!</a></button>
                        </div>
                        </div>
                        </div>
                      
                               ):(
                           <div className="list-div">
                            <img src={book.volumeInfo.imageLinks.thumbnail} />
                           </div>
                               )
                          
                    }
                    
                    
                    </div>
                ))
            }
            
           
        </div>
    )
}
export default GetBooksList;