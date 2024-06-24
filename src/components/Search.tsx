import { useRef, useState } from 'react'
import ButtonSearch from './ButtonSearch'

import Drwopdown from './Drwopdown'

const Search = () => {
  const [value, setValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
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
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      />
      <ButtonSearch />
      {isOpen && <Drwopdown refInput={inputContentRef}  />}
    </div>
  )
}

export default Search
