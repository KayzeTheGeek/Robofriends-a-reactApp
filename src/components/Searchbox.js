function Searchbox({searchChange}){
    return(
        <div className="ba3">
            <input 
                className="pa3 ba b--green bg-lightest-blue" 
                type="search" 
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default Searchbox;