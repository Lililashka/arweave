import * as React from "react"
import { NextComponentType } from "next"
import moment from "moment"
import Layout from "../ui/Layout"
import BlogInfoBar from "../blog/InfoBar"
import ShareButton from "../blog/ShareButton"

type Props = {
  meta: object
}

export default function WithBlogPost<P extends Props>(WrappedComponent: NextComponentType<P>): React.ComponentType<P> {
  function WithBlogPostWrapper(props: any) {
    const { children, meta } = props;
    const { title, category, desc, date, author } = meta || {};
    const { name: authorName, image: authorImage } = author || {};
    const dateFormat = moment(date).format("DD MMM YYYY")

    return (
      <Layout className="blog-post" title={title || ""} desc={desc || ""}>
        <div className="blog-post__header-bg" />
        <div className="blog-post__header">
          <h2>Blog post</h2>
        </div>
        <div className="blog-post__content">
          <div className="blog-post__content-info">
            <div className="blog-post__content-info__left">
              <h1>{title}</h1>
              <BlogInfoBar category={category} publishedDate={dateFormat} />
            </div>
            <div className="blog-post__content-info__right">
              <div className="author-container">
                <span>written by&nbsp;</span><span className="name">{authorName}</span>
                <img src={authorImage} />
              </div>
              <ShareButton url="" />
            </div>
          </div>
          {children}
        </div>
      </Layout>
    )
  }

  return WithBlogPostWrapper
};