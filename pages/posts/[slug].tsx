import React from 'react'
import {Post} from '../../lib/postModel'
import { getPosts, getPost } from '../../services';
import Router from 'next/router'
import moment from 'moment';

import {
  BackButton,
  BackButtonEnd,
  PostDiv,
  GreaterPostDiv,
  SlugContainer,
  FooterContainer,
  SlugHeaderContainer,
  SlugHeaderText,
  SlugHeaderImg,
  SlugAuthor,
  SlugAuthorAvatar,
  SlugAuthorName,
  SlugDate

} from "../../styles/Slug.module.js";
import { Footer } from '../../components';


const PostCard = ( post: { post: { coverPhoto: { url: string; }; author: { avatar: { url: string; }; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; }; publishDate: moment.MomentInput; content: { html: any; }; }; } ) => {
  return (
    <>
    <SlugContainer>
    <BackButton onClick={() => Router.back()}>Back</BackButton>
<GreaterPostDiv>
  <SlugHeaderContainer>
  <SlugHeaderImg src={post.post.coverPhoto.url}/>
  <SlugHeaderText>
  <SlugAuthor>
  <SlugAuthorAvatar src={post.post.author.avatar.url}/>
  <SlugAuthorName>
    {post.post.author.name}
    </SlugAuthorName>
  </SlugAuthor>
  <SlugDate>
  {moment(post.post.publishDate).format("MMM Do YYYY")}
  </SlugDate>
  </SlugHeaderText>
  </SlugHeaderContainer>
      <PostDiv className='slugcontent'
        dangerouslySetInnerHTML={{ __html: post.post.content.html }}
      ></PostDiv>
      </GreaterPostDiv>
      <BackButtonEnd onClick={() => Router.back()}>Back to Blog</BackButtonEnd>
      <FooterContainer>
      <Footer/>
      </FooterContainer>
      </SlugContainer>

</>
  )
}

export default PostCard


// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPost(params.slug);
  return {
    props: {
      post: data,
    },
  };
}
