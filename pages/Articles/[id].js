import { useRouter } from "next/router";
import useFetch from "../../Components/01-Hooks/useFetch";
import NavBar from "../../Components/NavBar/NavBar";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import styles from "./ArticleID.module.css"
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
})

export async function getStaticPaths() {

  const res = await client.getEntries({
    content_type: "articleCards",
  })
  const paths = res.items.map((item) => {
    return {
      params: { id: item.fields.slug }
    }
  })
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  console.log(params)
  const { items } = await client.getEntries({
    content_type: "articlePage",
    "fields.slug": params.id
  })
  return {
    props: { article: items[0].fields.content }
  }
}

const ArticleTemplate = ({ article }) => {
  console.log(article)

  return (
    <div >
      <NavBar />
      <div className={styles.Background}></div>
      <main className={styles.Main}>
        {documentToReactComponents(article)}
      </main>

    </div>
  );
}

export default ArticleTemplate;