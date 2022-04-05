
import { useEffect, useState } from "react";
import {ReactSortable} from "react-sortablejs"; 
import { sortableItem } from "./Types";
// same as Brenna's? no! She used "react-sortablejs"!?
    // but that's a wrapper for sortablejs?
// import types here (later)? (For checking.)

// this file is one component.



// single poem was set to displayData by Navbar
export default function Puzzle ({ singlepoem }: any) {
    const [wordArray, setWordArray] = useState<sortableItem[]>();
    useEffect(() =>{
        const initialWordArr:string[] =  singlepoem?.text?.split(" ")
        console.log(initialWordArr)
        const initialItemArray:sortableItem[] = initialWordArr?.map((word,index)=>{
            return {name:word, id:index }
        })
        setWordArray(initialItemArray)
    },[])
    

    return(
            <div>
            <li key={singlepoem?.id}> 
            {singlepoem?.title} 
            <ReactSortable list ={wordArray} setList={setWordArray}/>
                {wordArray?.map((item) => {
                    <div key={item.id}>{item.name}</div>
                })}
            <ReactSortable/>
                <div>{singlepoem?.text}</div>
            </li>
            <ul id="items">
	            <li>item 1</li>
	            <li>item 2</li>
	            <li>item 3</li>
            </ul>
             </div>
)}  

