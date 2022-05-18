import { listenerCount } from "process";
import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { sortableItem } from "./Types";
// same as Brenna's? no! She used "react-sortablejs"!?
// but that's a wrapper for sortablejs?
// import types here (later)? (For checking.)

// this file is one component.

// single poem was set to displayData by Navbar

// list.sort(() => Math.random() - 0.5) // for shuffling

export default function Puzzle({ singlepoem }: any) {
  const [wordArray, setWordArray] = useState<sortableItem[]>(); // a "state"
  const [orderedArray, setOrderedArray] = useState<string[]>([]);
  const [ordered, setOrdered] = useState<boolean>(false);

  // use Effect to handle initial order and dragging/sorting
  useEffect(() => {
    if(singlepoem){
        const initialWordArr: string[] = singlepoem?.text?.split(" "); //split up poems
        const patternArray:string[]=[];
        let word_count = 0
        let pattern_pos = 0
        while(word_count < initialWordArr?.length){
            let line_count = 0;
            let line = ""; // initialize the line
            while(line_count < singlepoem.pattern[pattern_pos]){
                //build the line
                line = line.concat(initialWordArr[word_count], " ")
                word_count++
                line_count++
                if(word_count === initialWordArr.length) break;
            }
            if(pattern_pos + 1 === singlepoem.pattern.length){
                pattern_pos = 0;
            } else {
                pattern_pos++
            }
            patternArray.push(line.trimEnd());
        }
console.log(patternArray)

        setOrderedArray([...patternArray]) // set a state
        console.log(initialWordArr);
        const initialItemArray: sortableItem[] = patternArray?.map(
          (word, index) => {
            return { name: word, id: index };
          }
        );
    
        console.log(orderedArray)
        initialItemArray?.sort(() => Math.random() - .5);
        console.log(initialItemArray);
        setWordArray(initialItemArray);
    }
   
  }, [singlepoem?.text]); // thislast [] is the dependency array

  const orderCheck = () => {
    // setOrdered(true); // for debugging
    // Check  if ids are in order
    console.log(orderedArray)
    if(wordArray){
        for (let i=0; i<wordArray?.length;i++){
            if(wordArray[i].name !== orderedArray[i] ) return false
        }
        return true
    }
    return false
  }

  return (
    <div>
        {ordered ? <div>Poem is ordered</div> : <div>Poem is unordered</div>}
      <li key={singlepoem?.id}>
        {singlepoem?.title}
        {wordArray && 
        <ReactSortable 
            list={wordArray} 
            setList={setWordArray} 
            onEnd={() => setOrdered(orderCheck())}>  
          {wordArray?.map((item) => {
           return <div key={item.id}>{item.name}</div>;
            })}
        </ ReactSortable >}
        <div>{singlepoem?.text}</div>
      </li>
      <ul id="items">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </div>
  );
}
