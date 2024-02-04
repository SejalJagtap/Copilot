'use client'
import type { FC } from 'react'
import React, { useRef } from 'react'
const examples = [
    "Get me the top 5 stories on Hacker News in markdown table format. Use columns like title, link, score, and comments.",
    "Summarize the comments in the top hacker news story.",
    "What is the top story on Hacker News right now?",
];
// const [showExamples, setShowExamples] = React.useState(true);
export type IExamplProps={
    // isHideExamples?:boolean
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    inputRef: React.RefObject<HTMLTextAreaElement>;

}

const Examples: FC<IExamplProps>=({
    setQuery,
    inputRef 
    // isHideExamples =false
})=>{
    // const [query, setQuery] = React.useState('')
    // const inputRef = useRef(null);
    return(
        <div className='mx-auto pc:w-[794px] max-w-full mobile:w-full px-3.5'>
        <div className="flex flex-col space-y-4 border-t border-gray-200 bg-gray-50 p-7 sm:p-10">
            {examples.map((example, i) => (
              <button
                key={i}
                className="rounded-md border border-gray-200 bg-white px-5 py-3 text-left text-sm text-gray-500 transition-all duration-75 hover:border-black hover:text-gray-700 active:bg-gray-50"
                onClick={() => {
                  setQuery(example); // Set the textarea value when a button is clicked
                  inputRef.current?.focus();
                }}
              >
                {example}
              </button>
            ))}
        </div>
      </div>
    )
}
export default React.memo(Examples);