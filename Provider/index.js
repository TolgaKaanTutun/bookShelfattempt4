import React,{Component} from 'react';

export const MyContext = React.createContext();
export default class index extends Component{
    constructor(){
        super();
        this.state={
            books:[],
            currentlyReading:[],
            wantToRead:[],
            read:[],
            addBooks: books =>{
            const currentlyReading = books.filter(book=>book.Shelf==="currentlyReading");
            const read = books.filter(book=>book.Shelf==="read");
            const wantToRead = books.filter(book=>book.Shelf==="wantToRead");
            this.setState({books,currentlyReading,read,wantToRead})
            },
            moveBook: (book,newShelf,allShelfs)=>{
                const newBooks =this.state.books.map(allBooks=>{
                    const foundID=allShelfs[newShelf].find(
                        bookID => bookID===allBooks.id
                    );
                    if(foundID){
                        allBooks.Shelf=newShelf;
                    }
                    return allBooks;
                
                });
                this.state.addBooks(newBooks)
            }
        };
    }

    render(){
       return( <MyContext.Provider value={{...this.state}}>
            {this.props.children}
        </MyContext.Provider>)
    }
    
}