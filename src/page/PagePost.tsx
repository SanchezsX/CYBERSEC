import { useParams } from 'react-router-dom'
import useFetchPost from '../hooks/useFetchPost'
import Skeleton from '../components/Skeleton'

const PagePost = () => {
  const { id } = useParams()
  const postId = id !== undefined ? id : ''
  const { post, loading } = useFetchPost(postId)

  if (loading) {
    return (
      <div className="flex flex-col">
        <Skeleton
          width="700px"
          height="40px"
          className="mt-[100px] rounded-full"
        />
        <div className="flex gap-2">
          <Skeleton
            width="100px"
            height="20px"
            className="mt-[8px] rounded-full"
          />

          <Skeleton
            width="200px"
            height="20px"
            className="mt-[8px] rounded-full"
          />
        </div>
        <div className="mt-[25px]">
          <Skeleton
            width="700px"
            height="20px"
            className="mt-[20px] rounded-full"
          />
          <Skeleton
            width="500px"
            height="20px"
            className="mt-[20px] rounded-full"
          />
          <Skeleton
            width="300px"
            height="20px"
            className="mt-[20px] rounded-full"
          />
          <Skeleton
            width="500px"
            height="20px"
            className="mt-[20px] rounded-full"
          />
          <Skeleton
            width="500px"
            height="20px"
            className="mt-[20px] rounded-full"
          />
          <Skeleton
            width="250px"
            height="20px"
            className="mt-[20px] rounded-full"
          />
          <Skeleton
            width="300px"
            height="20px"
            className="mt-[20px] rounded-full"
          />
          <Skeleton
            width="200px"
            height="20px"
            className="mt-[20px] rounded-full"
          />
          <Skeleton
            width="300px"
            height="20px"
            className="mt-[20px] rounded-full"
          />
          <Skeleton
            width="400px"
            height="20px"
            className="mt-[20px] rounded-full"
          />
          <Skeleton
            width="600px"
            height="20px"
            className="mt-[20px] rounded-full"
          />
          <Skeleton
            width="400px"
            height="20px"
            className="mt-[20px] rounded-full"
          />
        </div>
      </div>
    )
  }

  if (!post) {
    return <div>Post not found</div>
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  return (
    <div className="text-white mt-[85px] p-5">
      <div className="mb-[55px]">
        <h1 className="text-[23px] font-semibold">{post.title}</h1>
        <p className="text-[#A6A6A6] text-[14px]">
          {formatDate(post.$createdAt)} / {post.views} просмотров
        </p>
      </div>
      <p className="text-[23px] max-[750px]:text-[18px]">{post.content}</p>
    </div>
  )
}

export default PagePost
