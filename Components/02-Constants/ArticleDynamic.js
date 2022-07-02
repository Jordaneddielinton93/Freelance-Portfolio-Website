import { CopyBlock, dracula } from "react-code-blocks";


export const Statemannagement = {

}


export const Project1 = {
  paragraph1: "This was my first client website, built with a team using Firebase Auth,Storage and Realtime database using the React framework.",
  paragraph2: "I teamed up with a UX-designer to get a quick style up and running for a customer who needed their product done in less then 2 weeks .",
  paragraph3: "I used alot of things i had never learned or played with such as firebase's authentication system and their realtime database which was a good alternative to a built backend"

}
export const Project2 = {
  paragraph1: "This was my second Project with the school of code bootcamp team when we was first using React v17",
  paragraph2: "I learnt alot from this project not just using new tech like React but how to work in a small team to get the job done fast. The main purpose was to learn how to use react effectivly including page routing",
  paragraph3: "The site was one of my favourite design wise but I would love to try refactor it to how I would do it now."

}




export const CodeBlocks = {
  creatingContext: <CopyBlock
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
  />,
  usingContent: <CopyBlock
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
}