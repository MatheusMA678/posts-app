import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Post } from "./components/Post";

export function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchAPI() {
    try {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const children = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="min-h-screen font-inter bg-gray-800 text-white flex flex-col gap-8 p-8">
      <h1 className="font-bold text-3xl">Posts</h1>
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="grid lg:grid-cols-2 container mx-auto gap-4"
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data.posts.map((post) => {
            return <Post key={post.id} variants={children} data={post} />;
          })
        )}
      </motion.section>
    </div>
  );
}
