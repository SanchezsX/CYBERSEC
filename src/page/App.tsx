import Posts from '../components/Posts'
import Search from '../components/Search'
import { data } from '../data/data'

function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Search />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-[50px] max-[600px]:grid-cols-2 max-[412px]:grid-cols-1">
        {data.map((data, index) => (
          <Posts
            key={index}
            id={data.id}
            title={data.title}
            date={data.date}
            views={data.views}
          />
        ))}
      </div>
    </>
  )
}

export default App
