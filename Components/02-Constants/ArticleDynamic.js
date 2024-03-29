import { CopyBlock, dracula } from "react-code-blocks";

export const Statemannagement = {};

export const Project1 = {
  paragraph1:
    "This was my first client website, built with a team using Firebase Auth,Storage and Realtime database using the React framework.",
  paragraph2:
    "I teamed up with a UX-designer to get a quick style up and running for a customer who needed their product done in less then 2 weeks .",
  paragraph3:
    "I used alot of things i had never learned or played with such as firebase's authentication system and their realtime database which was a good alternative to a built backend",
};
export const Project2 = {
  paragraph1:
    "This was my second Project with the school of code bootcamp team when we was first using React v17",
  paragraph2:
    "I learnt alot from this project not just using new tech like React but how to work in a small team to get the job done fast. The main purpose was to learn how to use react effectivly including page routing",
  paragraph3:
    "The site was one of my favourite design wise but I would love to try refactor it to how I would do it now.",
};

export const Project3 = {
  paragraph1:
    "This Project is my main flagship project , using alot of tech and user research such as making a UX/UI process and using tech such as Next.js, Redux toolkit, Chakra, Axios, jest testing, auth0, wirefraing, forms, pagination, PostgreSQL, next-Api and so much more",
  paragraph2:
    "I plan to make this site using React native too then later on swap the Backend out for AWS s3 bucket",
  paragraph3:
    "The site was one of my favourite design wise and Chakra made that so much easier to make responsive",
};

export const Project4 = {
  paragraph1:
    "I used this site to learn Material UI and use query while also helping my sister out with a site. I found it cool how fast you can build using MUI.",
  paragraph2:
    "I plan to make this site's backend to have an easy-to-access CMS with Contentful so she can upload her own images and text.",
  paragraph3: "This site was one of the main reasons I got into React Native.",
};

export const CodeBlocks = {
  creatingContext: (
    <CopyBlock
      text={`
import React from 'react';
export let pageContext = React.createContext() 

function App() {

let [state,setState]=useState({
name:"jordan",
age:28
})

return (
<pageContext.Provider value={{ state , setState }}>
<div className="App">
  <NavBar/>
  <RandomComponent/>
</div>
<pageContext.Provider>
)`}
      language={"jsx"}
      showLineNumbers={true}
      wrapLines={true}
      theme={dracula}
    />
  ),
  usingContent: (
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
)`}
      language={"jsx"}
      showLineNumbers={true}
      wrapLines={true}
      theme={dracula}
    />
  ),
};
