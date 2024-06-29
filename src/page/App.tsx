import Posts from '../components/Posts'
import Search from '../components/Search'
import Skeleton from '../components/Skeleton'
// import { data } from '../data/data'
// import { databases } from '../appwrite'
// import { useEffect, useState } from 'react'
// import { Models } from 'appwrite'

import fetchPosts from '../hooks/useFetchPosts'

function App() {
  const { posts, loading } = fetchPosts()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <Search />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-[50px] max-[600px]:grid-cols-2 max-[412px]:grid-cols-1 max-[412px]:mt-[20px]">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Skeleton width='full' height='290px' className='rounded-[8px] mt-[20px]' key={index} />
            ))
          : posts.map((data, index) => (
              <Posts
                img={data.img}
                key={index}
                id={data.$id}
                title={data.title}
                date={formatDate(data.$createdAt)}
                views={data.views}
              />
            ))}
      </div>
    </>
  )
}

export default App
