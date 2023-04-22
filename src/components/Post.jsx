import React from "react";
import { motion } from "framer-motion";
import { Chat } from "@phosphor-icons/react";

export function Post({ data, variants }) {
  return (
    <motion.div
      variants={variants}
      className="relative flex flex-col gap-4 p-8 rounded-lg bg-gray-700 border border-gray-500"
    >
      <div className="absolute top-8 right-8 text-sm flex items-center gap-2">
        <Chat size={20} />
        <span>{data.reactions}</span>
      </div>
      <h2 className="font-semibold text-xl">{data.title}</h2>
      <p className="text-sm text-gray-100">{data.body}</p>
      <div className="flex items-center gap-2">
        {data.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-md border border-gray-500 hover:bg-gray-500 cursor-pointer transition"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
