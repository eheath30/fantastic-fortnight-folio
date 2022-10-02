import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "../lib/postModel";
import moment from "moment";

import {
  PostCardDiv,
  ImgContainer,
  Author,
  AuthorName,
  AuthorAvatar,
  DateDiv,
  Tab,
  Title,
  GreaterTab,
  Category
} from "../styles/PostCard.module.js";

const PostCard = ({
  category,
  title,
  author,
  coverPhoto,
  id,
  publishDate,
  slug,
}: Post) => {
  console.log(category)
  return (
    <PostCardDiv key={id}>

      <Link href={`/posts/${slug}`}>
        <ImgContainer>
          <Image priority={true} layout="fill" src={coverPhoto.url} alt=""/>
        </ImgContainer>
      </Link>
      <GreaterTab>
      <Title>{title}</Title>
        <Tab>
        <Author>
          <AuthorAvatar src={author.avatar.url}/>
          <AuthorName>{author.name}</AuthorName>
        </Author>
        <Category>
        {category}
        </Category>
        <DateDiv>{moment(publishDate).format("MMM Do YY")}</DateDiv>
        </Tab>
              </GreaterTab>
    </PostCardDiv>
  );
};

export default PostCard;
