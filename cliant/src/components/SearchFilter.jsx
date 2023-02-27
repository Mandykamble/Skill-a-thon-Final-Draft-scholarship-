import React, {useState} from 'react'

const SearchFilter = ({onSearch}) => {

  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  }
  return (
    <form className='mb-20' onSubmit={handleSubmit}>

        <div className=" mx-5 flex mt-5 items-center">
            <div className="flex border border-purple-200 rounded">
                <input
                    type="text"
                    value={query} onChange={handleChange}
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button type='submit' className="px-4 ml-2 text-white hover:bg-purple-500 bg-purple-600 border-l rounded ">
                    Search
                </button>
            </div>
        </div>
    </form>
  )
}

export default SearchFilter