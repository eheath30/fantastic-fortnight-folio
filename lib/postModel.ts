//why is this here? possible import error... check runtime for errors and delete.
// import { HtmlProps } from "next/dist/shared/lib/html-context";

export interface Post {
    category: string;
    title: string;
    author: {name: string,
    avatar: { url: string }};
    coverPhoto: {url: string;};
    publishDate: string;
    id: string;
    slug: string;
    content: {html: any};

}
