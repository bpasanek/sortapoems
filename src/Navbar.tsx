// imports

import { NavbarTitles } from "./Types"


// A Navbar, for the left side. 

export default function Navbar ({poemTitles, setCurrentPoemId }: any) {
console.log(poemTitles)

//  Generate nav buttons, with map -- titles and ids. Clicking title sets currentPoemId
    return(
            <div className="button"> 

           { 
           poemTitles.map((element:NavbarTitles) => {
               return(
                    <a onClick={() => setCurrentPoemId(element.id)} > {element.title} </a>
               )
           })

           }
 
            </div>
)}  