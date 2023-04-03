interface IfirstChildProps {

    handleSearch: (e:any) => void
  }

export default function Searchbar
({ handleSearch } :  IfirstChildProps ) {

  return (

    <input 
    onKeyDown={handleSearch}
    className="search-input form-control" 
    type="text"
    name="search" 
    placeholder="Search product"/>
  );
};
