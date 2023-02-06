const SearchFiler = (props) => {
  return (
    <div>
      filter shown with:
      <input onChange={props.handleFilter} value={props.filter} />
    </div>
  );
};

export default SearchFiler;
