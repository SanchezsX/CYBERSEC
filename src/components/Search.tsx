import { useEffect, useRef, useState } from 'react'
import ButtonSearch from './ButtonSearch'
import Dropdown from './Drwopdown'
import { data } from '../data/data'

const Search = () => {
  const [value, setValue] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [filteredPosts, setFilteredPosts] = useState(data)
  const [isButtonVisible, setIsButtonVisible] = useState(true)
  useEffect(() => {
    const handleResize = () => {
      setIsButtonVisible(window.innerWidth >= 600)
    }
    window.addEventListener('resize', handleResize)
    
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (value.trim() === '') {
      setFilteredPosts([])
      setIsVisible(false)
    } else {
      setIsVisible(true)
      setFilteredPosts(
        data.filter((post) =>
          post.title.toLowerCase().includes(value.toLowerCase())
        )
      )
    }
  }, [value])

  const inputContentRef = useRef<HTMLInputElement | null>(null)
  return (
    <div
      ref={inputContentRef}
      className="flex items-center mt-[200px] gap-2 max-[600px]:w-full"
    >
      <input
        type="text"
        value={value}
        placeholder="Search"
        className=" w-[600px] h-[60px] focus:outline-none bg-[#282828] text-white px-4 rounded-[8px]"
        onChange={(e) => setValue(e.target.value)}
      />
      {isButtonVisible && <ButtonSearch />}
      <Dropdown
        refInput={inputContentRef}
        isVisible={isVisible}
        items={filteredPosts}
      />
    </div>
  )
}

export default Search
