import { useState, useEffect } from 'react';
import { databases } from '../appwrite';
import { Models } from 'appwrite';

const useFetchPost = (postId: string) => {
  const [post, setPost] = useState<Models.Document | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await databases.getDocument(
          import.meta.env.VITE_DATABASE_ID,
          import.meta.env.VITE_COLLECTION_ID_POSTS,
          postId
        );
        setPost(response);
      } catch (err) {
        console.log(err);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  return { post, loading };
};

export default useFetchPost;
