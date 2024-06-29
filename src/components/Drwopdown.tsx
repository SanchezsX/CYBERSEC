import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import cn from '../helpers/cn'
import { Models } from 'appwrite'
import { databases } from '../appwrite'

const Dropdown = ({
  refInput,
  isVisible,
  items,
}: {
  refInput: React.RefObject<HTMLInputElement>
  isVisible: boolean
  items: Models.Document[]
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [width, setWidth] = useState(0)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const updateViews = async (views: number, id: string) => {
    await databases.updateDocument(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_COLLECTION_ID_POSTS,
      id,
      {
        views: views + 1,
      }
    )
  }

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
          className={cn(
            'shadow-drop bg-[#282828] rounded-[8px] p-4 border-[1px] border-[#ffff]/10',
            'w-[752px] max-h-[322px] overflow-auto'
          )}
        >
          {items.length === 0 ? (
            <div
              className={cn(
                'text-[#ffff]/40 flex flex-col justify-center h-full items-center'
              )}
            >
              nothing found...
            </div>
          ) : (
            items.map((data, index) => (
              <div
                key={data.id}
                onClick={(e) => {
                  e.preventDefault()
                  updateViews(data.views, data.$id)
                }}
              >
                <Link
                  to={`/CYBERSEC/post/${data.$id}`}
                  key={data.id}
                  className={`text-white flex flex-col ${index === items.length - 1 ? '' : 'mb-[25px]'}`}
                >
                  {data.title}
                  <span className="text-[#ffff]/50">
                    {formatDate(data.$createdAt)} / {data.views}
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
