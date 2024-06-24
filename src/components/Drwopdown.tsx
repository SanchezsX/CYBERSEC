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

  items: { title: string; date: string; views: number; id: number }[]
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!refInput.current) return
    const inputHeight = refInput.current.offsetHeight

    const dropdownContentRef = refInput.current
    if (dropdownContentRef) {
      const { x, y } = dropdownContentRef.getBoundingClientRect()

      const yPosition = y + inputHeight + 20

      setPosition({ x, y: yPosition })
      setWidth(dropdownContentRef.offsetWidth)
    }
  }, [refInput.current])
  const dropdownContentRef = useRef<HTMLDivElement>(null)

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'absolute',
            top: position.y,
            left: position.x,
            width: width,
          }}
          ref={dropdownContentRef}
          className="w-[752px] h-[322px] bg-[#282828] rounded-[8px] p-4 overflow-auto"
        >
          {items.length === 0 ? (
            <div className="text-[#ffff]/40 flex flex-col justify-center h-full items-center">Ничего не найдено...</div>
          ) : (
            items.map((data) => (
              <div
                key={data.id}
                className=""
              >
                <Link
                  to={`/post/${data.id}`}
                  key={data.id}
                  className="text-white flex flex-col mb-[26px]"
                >
                  {data.title}
                  <span className="text-[#ffff]/50">
                    {data.date} / {data.views}
                  </span>
                </Link>
              </div>
            ))
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default Dropdown
