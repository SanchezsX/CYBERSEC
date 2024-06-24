import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Dropdown = ({
  refInput,
  isVisible,
  items,
}: {
  refInput: React.RefObject<HTMLInputElement>
  isVisible: boolean
  items: { title: string; date: string; views: number }[]
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!refInput.current) return
    const inputHeight = refInput.current.offsetHeight

    const dropdownContentRef = refInput.current
    if (dropdownContentRef) {
      const { x, y } = dropdownContentRef.getBoundingClientRect()

      const yPosition = y + inputHeight + 30

      setPosition({ x, y: yPosition })
      setWidth(dropdownContentRef.offsetWidth)
    }
  }, [refInput.current])
  const dropdownContentRef = useRef<HTMLDivElement>(null)
  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100, transition: { duration: 0.2 } }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'absolute',
            top: position.y,
            left: position.x,
            width: width,
          }}
          ref={dropdownContentRef}
          className="w-[752px] h-[322px] bg-[#1D1D1D] rounded-[8px] p-4"
        >
          {items.slice(0, 4).map((data, index) => (
            <div className="">
              <Link
                to='/post'
                key={index}
                className="text-white flex flex-col mb-[26px]"
              >
                {data.title}
                <span className="text-[#ffff]/50">
                  {data.date} / {data.views}
                </span>
              </Link>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default Dropdown
