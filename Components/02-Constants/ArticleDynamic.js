import { CopyBlock, dracula } from "react-code-blocks";


export const Statemannagement = {

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