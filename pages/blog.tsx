import type { InferGetStaticPropsType, NextPage } from "next";
import { motion } from "framer-motion";
import { Footer, PostCard } from "../components";
import { getPosts } from '../services'
import {Post} from '../lib/postModel'
import { GetStaticProps } from 'next'



export async function getStaticProps() {
  const  posts  = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}

import { PageContainer, Main, PostGrid, BlogTitle, Svg } from "../styles/Blog.module.js";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.2 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

function Blog({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer>
      <Main>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <BlogTitle>A <span style={{textDecoration: "line-through" }}>Work</span> Blog in progress <br/><Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
</Svg>
</BlogTitle>

          <PostGrid>
            {posts.map((post: Post) => (

              <PostCard
                key={post.id}
                content={post.content}
                title={post.title}
                author={post.author}
                coverPhoto={post.coverPhoto}
                id={post.id}
                publishDate={post.publishDate}
                slug={post.slug}
              />
            ))}
          </PostGrid>
          <Footer />
        </motion.div>
      </Main>
    </PageContainer>
  );
};

export default Blog;
