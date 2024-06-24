interface PostsProps {
  title: string
  date: string
  views: number
}
const Posts = ({ title, date, views }: PostsProps) => {
  return (
    <div className="mt-[20px]">
      <img
        src="/images/bg-white.png"
        alt="Search"
        className="w-[249px] h-[131px]"
      />
      <div className="bg-[#212121] w-[249px] h-[131px] px-[20px] pt-[25px]">
        <p className="text-white text-[16px]">{title}</p>
        <p className="text-[#ABABAB] pt-2 text-[12px]">
          {date} / {views}
        </p>
      </div>
    </div>
  )
}

export default Posts
