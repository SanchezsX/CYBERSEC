import { useEffect, useRef  } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { databases } from '../appwrite'
interface PostsProps {
  title: string
  date: string
  views: number
  id: string
  img?: string
}

const Posts = ({ title, date, views, id, img }: PostsProps) => {
  const titleRef = useRef<HTMLParagraphElement>(null)

  const updateViews = async () => {
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
    const truncateText = (
      text: string,
      lines: number,
      element: HTMLElement
    ) => {
      const lineHeight = parseInt(getComputedStyle(element).lineHeight)
      const maxHeight = lineHeight * lines

      element.textContent = text
      let truncatedText = text

      while (element.scrollHeight > maxHeight && truncatedText.length > 0) {
        truncatedText = truncatedText.slice(0, -1)
        element.textContent = truncatedText + '...'
      }
    }

    const handleResize = () => {
      if (window.matchMedia('(max-width: 700px)').matches) {
        if (titleRef.current) {
          truncateText(title, 2, titleRef.current)
        }
      } else {
        if (titleRef.current) {
          titleRef.current.textContent = title
        }
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [title])

  return (
    <Link
      onClick={updateViews}
      to={`/CYBERSEC/post/${id}`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-[20px] w-full"
      >
        <div className="w-full h-[160px] rounded-t-[8px] overflow-hidden">
          <img
            src={img}
            alt="Search"
            className="size-full object-cover"
          />
        </div>
        <div className="bg-[#212121] h-[131px] px-[20px] pt-[20px] rounded-b-[8px]">
          <p
            ref={titleRef}
            className="text-white text-[16px] max-[412px]:text-[18px]"
          >
            {title}
          </p>
          <p className="text-[#ABABAB] pt-2 text-[12px] max-[412px]:text-[16px]">
            {date} / {views} views
          </p>
        </div>
      </motion.div>
    </Link>
  )
}

export default Posts
