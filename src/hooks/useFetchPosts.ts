import { Models } from "appwrite"
import { useEffect, useState } from "react"
import { databases } from "../appwrite"

const useFetchPosts = () => {
  const [posts, setPosts] = useState<Models.Document[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const usePosts = async () => {
      setLoading(true)
      try {
        const response = await databases.listDocuments(
          import.meta.env.VITE_DATABASE_ID,
          import.meta.env.VITE_COLLECTION_ID_POSTS
        )
        setPosts(response.documents)
      }catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    usePosts()
  }, [])
  

  return { posts, loading }
}



export default useFetchPosts