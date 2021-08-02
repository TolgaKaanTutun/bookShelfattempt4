import React,{Component} from 'react';
import { update } from '../BooksAPI';



export default class Book extends Component{

    handleChange=async e=>{
        try{
            const Shelf = e.target.value;
            const book=this.props
            const result = await update(book,Shelf)
        }catch(error){
            console.log(error)
        }
    }

    render(){
        
        return(            
        <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ 
                    width: 128, 
                    height: 193, 
                    backgroundImage: 'url(${this.props.imagelinks.thumbnail})'}}/>
                
                <div className="book-shelf-changer">
                  <select onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.title}</div>
              <div className="book-authors">{this.props.authors}</div>
            </div>
          </li>)
    }
    
}