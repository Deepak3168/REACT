const Filter = (props) => {
    return (
      <>
        <label>Search</label>
        <input
          type="text"
          value={props.searchField}
          name="SearchField"
          onChange={props.handleSearch}
          placeholder="name or number"
        />
      </>
    );
  }
  
export default Filter;
  