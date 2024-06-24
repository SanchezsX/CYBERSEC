import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const Dropdown = ({
  refInput,
}: {
  refInput: React.RefObject<HTMLInputElement>
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [width, setWidth] = useState(0)

 

  useEffect(() => {
    if (!refInput.current) return
    const inputHeight = refInput.current.offsetHeight

    const dropdownContentRef = refInput.current
    if (dropdownContentRef) {
      const { x, y } = dropdownContentRef.getBoundingClientRect()

      const yPosition = y + inputHeight + 10

      setPosition({ x, y: yPosition })
      setWidth(dropdownContentRef.offsetWidth)
    }
  }, [refInput.current])
  const dropdownContentRef = useRef<HTMLDivElement>(null)
  return createPortal(
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        width: width,
      }}
      ref={dropdownContentRef}
      className="w-[752px] h-[322px] bg-[#1D1D1D] rounded-[8px]"
    ></div>,
    document.body
  )
}

export default Dropdown
