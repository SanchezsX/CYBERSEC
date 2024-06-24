import Container from '../components/Container'
import Posts from '../components/Posts'
import Search from '../components/Search'
import { data } from '../data/data'

function App() {
  return (
    <>
      <Container width="884px">
        <div className="flex flex-col items-center">
          <img
            className="mt-[50px]"
            src="/icons/Logo.svg"
            alt="Search"
          />
          <Search />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-[50px]">
          {data.map((data) => (
            <Posts
              title={data.title}
              date={data.date}
              views={data.views}
            />
          ))}
        </div>
      </Container>
    </>
  )
}

export default App
