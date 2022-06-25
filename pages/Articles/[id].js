
import NavBar from "../../Components/NavBar/NavBar";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from "./ArticleID.module.css"
import { createClient } from "contentful";
import { CopyBlock, dracula } from "react-code-blocks";
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
    "fields.slug": params.slug
  })
  return {
    props: { article: items[0].fields }
  }
}

const ArticleTemplate = ({ article }) => {
  console.log(article)

  return (
    <div >
      <NavBar />
      <div className={styles.Background}></div>
      <main className={styles.Main}>
        {documentToReactComponents(article.content)}

        <CopyBlock
          text={`
          import React from 'react';
          export let pageContext = React.createContext() 

          function App() {

            let [state,setState]=useState({
              name:"jordan",
              age:20
            })

            return (
              <pageContext.Provider value={{ state , setState }}> {/*<<< your state goes in the global value */}
                  <div className="App">
                      <NavBar/>
                      <RandomComponent/>
                  </div>
              <pageContext.Provider>
            )
            
            `}
          language={"jsx"}
          showLineNumbers={true}
          wrapLines={true}
          theme={dracula}
        />
        {documentToReactComponents(article.content2)}
        <CopyBlock
          text={`
          import React from 'react';
          import { PageContext } from "../App";

          export default function Navbar() {

            let { state, setState } = useContext(pageContext)
            console.log(state)

            return (
              <nav>

              </nav>
            )
            
            `}
          language={"jsx"}
          showLineNumbers={true}
          wrapLines={true}
          theme={dracula}
        />
      </main>

    </div>
  );
}

export default ArticleTemplate;