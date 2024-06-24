import { useParams } from 'react-router-dom'
import { data } from '../data/data'

const PagePost = ({ items }: { items: typeof data }) => {
  const { id } = useParams()
  const post = items.find((item) => item.id.toString() === id)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="text-white mt-[85px] p-5 ">
      <div className="mb-[55px]">
        <h1 className="text-[23px] font-semibold">{post.title}</h1>
        <p className="text-[#A6A6A6] text-[14px]">
          {post.date} / {post.views} views
        </p>
      </div>
      <p className="text-[23px] max-[750px]:text-[18px]">{post.content}</p>
    </div>
  )
}

export default PagePost
