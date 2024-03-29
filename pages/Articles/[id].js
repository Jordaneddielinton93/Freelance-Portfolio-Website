import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./ArticleID.module.css";
import { createClient } from "contentful";

import Head from "next/head";
import { useRouter } from "next/router";
import { CodeBlocks } from "../../Components/02-Constants/ArticleDynamic";
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "articleCards",
  });
  const paths = res.items.map((item) => {
    return {
      params: { id: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "articlePage",
    "fields.slug": params.id,
  });

  return {
    props: { article: items[0].fields },
  };
}

const ArticleTemplate = ({ article }) => {
  let router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.id} - Jordan Freelance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/greyback.png" />
      </Head>
      <div
        style={{
          backgroundImage: `url(https:${article.bgImage.fields.file.url})`,
        }}
        className={styles.Background}
      ></div>
      <main className={styles.Main}>
        {documentToReactComponents(article.content)}
        {article.slug == "react-state-management" && CodeBlocks.creatingContext}
        {documentToReactComponents(article.content2)}
        {article.slug == "react-state-management" && CodeBlocks.usingContent}
      </main>
    </div>
  );
};

export default ArticleTemplate;
