import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

interface PostsProps {
  title: string
  date: string
  views: number
  id: number
  img?: string
}

const Posts = ({ title, date, views, id, img }: PostsProps) => {
  const titleRef = useRef<HTMLParagraphElement>(null)

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
    <Link to={`/CYBERSEC/post/${id}`}>
      <div className="mt-[20px] w-full">
        <div className="w-full h-[160px] rounded-t-[8px] overflow-hidden">
          <img
            src={img}
            alt="Search"
            className='size-full object-cover'
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
            {date} / {views}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Posts
