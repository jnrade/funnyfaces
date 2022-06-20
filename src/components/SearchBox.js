// Component to display search box
const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input
            className='pa3 ba bg-light-green bg-lighest-blue'
             type='search' 
             placeholder='Search Funny Face'
             onChange ={searchChange}
             />
        </div>      
    );
}

export default SearchBox;