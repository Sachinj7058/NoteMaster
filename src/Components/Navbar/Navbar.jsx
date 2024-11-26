import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';

const Navbar = ({userInfo, onSearchNote, handleClearSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const onLogout = ()=>{
    localStorage.clear()
    navigate("/login")
  }
  

  const handleSearch = ()=>{
    if(searchQuery){
      onSearchNote(searchQuery)
    }

  };

  const onClearSearch = ()=>{
    setSearchQuery("");
    handleClearSearch();
  };
  return (
    <>
  <div className="bg-white flex flex-col md:flex-row items-center md:justify-between px-4 md:px-6 py-2 drop-shadow">
    <h2 className="text-lg md:text-xl font-medium text-black py-2">Notes</h2>

    <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-2 mt-2 md:mt-0">
      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  </div>
</>

  )
}

export default Navbar