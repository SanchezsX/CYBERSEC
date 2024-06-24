import { data } from "../data/data"

const PagePost = () => {
  return <div>
    {data.map((data) => (
      <div className="text-white">
        <h1>{data.title}</h1>
        <p>{data.date}</p>
        <p>{data.author}</p>
        <p>{data.views}</p>
        <p>{data.content}</p>
      </div>
    ))}
  </div>
}

export default PagePost
