'use client'
import type { FC } from 'react'
import React, { useRef } from 'react'
const examples = [
    "What is GenAi?",
    "What are different data stuctures?",
    "Roadmap for webdevelopment?",
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
      <div className='mx-auto h-full pc:w-[794px] max-w-full mobile:w-full px-3.5 '>
        <div className="absolute border-gray-200sm:mx-0 mx-5 mt-20 max-w-screen-md rounded-md border sm:w-full">
          <div className="flex flex-col space-y-4 p-7 sm:p-10">
            <h1 className="text-lg font-semibold text-black">
              Welcome to ChatHN!
            </h1>
            <p className="text-gray-500">
              This is an{" "}
              <a
                href="https://github.com/steven-tey/chathn"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 transition-colors hover:text-black"
              >
                open-source
              </a>{" "}
              AI chatbot that uses{" "}
              <a
                href="https://platform.openai.com/docs/guides/gpt/function-calling"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 transition-colors hover:text-black"
              >
                OpenAI Functions
              </a>{" "}
              and{" "}
              <a
                href="https://sdk.vercel.ai/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 transition-colors hover:text-black"
              >
                Vercel AI SDK
              </a>{" "}
              to interact with the{" "}
              <a
                href="https://github.com/HackerNews/API"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 transition-colors hover:text-black"
              >
                Hacker News API
              </a>{" "}
              with natural language.
            </p>
          </div>
          
            <div className="flex flex-col space-y-4 border-t border-gray-200 bg-gray-50 p-7 sm:p-10 ">
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
    </div>
      //   <div className='mx-auto h-full pc:w-[794px] max-w-full mobile:w-full px-3.5 py-[10em]'>
      //   <div className="flex flex-col space-y-4 border-t border-gray-200 bg-gray-50 p-7 sm:p-10 ">
      //       {examples.map((example, i) => (
      //         <button
      //           key={i}
      //           className="rounded-md border border-gray-200 bg-white px-5 py-3 text-left text-sm text-gray-500 transition-all duration-75 hover:border-black hover:text-gray-700 active:bg-gray-50"
      //           onClick={() => {
      //             setQuery(example); // Set the textarea value when a button is clicked
      //             inputRef.current?.focus();
      //           }}
      //         >
      //           {example}
      //         </button>
      //       ))}
      //   </div>
      // </div>
    )
}
export default React.memo(Examples);