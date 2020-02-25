import { useState, useEffect } from "react"
import { NextPage } from 'next'
import moment from "moment"
import Layout from '../../components/ui/Layout'
import CategoryFilterInput from '../../components/blog/CategoryFilterInput'

function importAll(r: any) {
  return r.keys().map(r);
}
const previewItems = importAll(require.context("../../blog", false, /-preview\.mdx$/));

function dateSortDesc(a: any, b: any) {
  const date1 = moment(a.meta.date);
  const date2 = moment(b.meta.date);
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
}

const Home: NextPage = () => {
  const [blogPreviews, setBlogPreviews] = useState([])
  const allBlogPreviews = previewItems.sort(dateSortDesc)

  useEffect(() => {
    categoryFilterCallback("all")
  }, [])

  function categoryFilterCallback(filterCategory: string) {
    const filterResult = allBlogPreviews.filter((props: any) => {
      if (filterCategory === "all") return true

      const { meta } = props
      const { category } = meta
      return category === filterCategory
    })
    setBlogPreviews(filterResult)
  }

  return (
    <Layout className="blog">
      <div className="blog__header-bg" />
      <div className="blog__header">
        <h2>Blog index</h2>
        <CategoryFilterInput callback={categoryFilterCallback} />
      </div>
      <div className="blog__post-grid">
        {blogPreviews.map((props: any, index: number) => {
          const { default: Component, meta } = props;
          const { titleEn } = meta;
          return <Component key={`${titleEn}-${index}`} />;
        })}
      </div>
    </Layout>
  )
};

export default Home;