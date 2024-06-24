import { useEffect, useRef, useState } from 'react'
import ButtonSearch from './ButtonSearch'
import Dropdown from './Drwopdown'
import { data } from '../data/data'

const Search = () => {
  const [value, setValue] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [filteredPosts, setFilteredPosts] = useState(data)

  useEffect(() => {
    if (value.trim() === '') {
      setFilteredPosts([])
    } else {
      setFilteredPosts(
        data.filter((post) =>
          post.title.toLowerCase().includes(value.toLowerCase())
        )
      )
    }
  }, [value])

  const handleVisibility = () => setIsVisible(!isVisible)

  const inputContentRef = useRef<HTMLInputElement | null>(null)
  return (
    <div
      ref={inputContentRef}
      className="flex items-center mt-[200px] gap-2 "
    >
      <input
        type="text"
        value={value}
        placeholder="Search"
        className=" w-[600px] h-[60px] focus:outline-none bg-[#282828] text-white px-4 rounded-[8px]"
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => handleVisibility()}
        onBlur={() => handleVisibility()}
      />
      <ButtonSearch />
      <Dropdown
        refInput={inputContentRef}
        isVisible={isVisible}
        items={filteredPosts}
      />
    </div>
  )
}

export default Search
