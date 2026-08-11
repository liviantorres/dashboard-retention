import React from "react"

export default function Button({children,...props}){

    return(
        <div className="pt-4 flex justify-center">
            <button 
            {...props}
            className="px-12 py-2 font-bahianita text-2xl tracking-widest text-gray-800 
                        rounded-full cursor-pointer select-none
                        
                        transition-all duration-200 ease-out
                        
                        hover:-translate-y-[2px] 
                        hover:shadow-lg 
                        active:translate-y-[1px]

                        border-2 border-transparent
                        
                        bg-gradient-to-r from-red-400 via-purple-400 to-green-400
                        [background-origin:border-box]
                        [background-clip:padding-box,_border-box]

                        after:absolute after:inset-[2px] after:rounded-full 
                        after:bg-gradient-to-b after:from-white after:to-gray-100 
                        after:-z-10 after:content-['']
                        after:transition-all after:duration-200
                        
                        hover:after:to-gray-200

                        relative z-0"
                style={{
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15), inset 0 -3px 0 rgba(0,0,0,0.1)'
                }}
            >
                {children}
            </button>
        </div>
    )
}