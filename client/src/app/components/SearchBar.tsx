import React from 'react'
import { Search } from 'lucide-react'

function SearchBar() {
   return (
      <div className="hidden sm:flex items-center gap-2   rounded-md  ring-1 ring-gray-200  px-3 py-1 shadow-md">
         <Search className="w-4 h-4 text-gray-500" />
         <input
            type="text"
            placeholder="Search..."
            className="outline-none text-sm flex-1 bg-transparent"
         />
      </div>
   )
}

export default SearchBar
