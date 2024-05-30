import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full py-10 flex items-center justify-center flex-col bg-slate-950 mt-auto'>
        <div className="w-full max-w-7xl mx-auto flex flex-row items-center justify-between max-sm:flex-col max-sm:justify-center max-sm:text-center px-6">
            <div className="flex-1 flex flex-col items-center justify-center space-y-2 w-full">
                <h2 className='text-xl text-slate-50 my-1.5'>Project Initiative by:</h2>
                <ul className='marker:text-purple-500 list-style-disc marker:bg-purple-500 flex flex-col space-y-1 p-0'>
                    <li className='text-muted-foreground my-1'>Bala Mathias</li>
                    <li className='text-muted-foreground my-1'>Chisom Nwachukwu</li>
                </ul>
            </div>   
            <p className='text-muted-foreground flex-1'>&copy; All rights reserved, SubMe {new Date().getFullYear()}.</p>  
        </div>
    </footer>
  )
}

export default Footer