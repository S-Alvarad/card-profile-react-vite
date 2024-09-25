import React from 'react'
// import './index.css'

export const App = () => {
   return (
      <div className="max-w-[490px] min-w-[340px] px-5 mx-auto">
         <div className="flex justify-center items-center h-screen">
            <div className="relative w-full border-[1px] border-green-100 shadow-xl shadow-lime-500 rounded-[20px]">
               <div className='pattern h-[230px] rounded-t-[20px] p-8'>
                  <div className='absolute top-[calc(50%-135px)] sm:top-[calc(50%-110px)] md:top-[calc(50%-110px)] lg:top-[calc(50%-110px)]'>
                     <img src="https://avatars.githubusercontent.com/u/77344361?v=4" alt="" className='border-[5px] border-green-100 rounded-full w-[120px] h-[120px]' />
                  </div>
               </div>
               <div className='bg-green-100 rounded-b-[20px] p-6'>
                  <div className="flex justify-end mb-3">
                     <a href="https://www.instagram.com/steven.nicks_/" target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-700 text-white py-[8px] px-10 rounded-[25px] text-sm">
                        Follow
                     </a>
                  </div>
                  <div className='flex flex-col mb-4'>
                     <div className="flex items-center gap-1">
                        <h1 className="h1 font-bold text-xl flex items-center">Steven Nicks</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-circle-check  text-green-500"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                     </div>
                     <span className="h1 font-normal text-sm text-slate-500">
                        @steven.nicks_
                     </span>
                  </div>
                  <p className='font-semibold text-base mb-4'>Analista y desarrollador de sistemas informativos con experiencia en el diseño, implementación y optimización de soluciones tecnológicas.</p>
                  <div className='flex justify-start items-center mb-4 gap-3'>
                     <div className='flex gap-3'>
                        <span className='h1 font-extrabold'>413 </span>
                        <span className='h1 font-normal text-base text-slate-500'>Following</span>
                     </div>
                     <div className='flex gap-3'>
                        <span className='h1 font-extrabold'>30 </span>
                        <span className='h1 font-normal text-base text-slate-500'>Followers</span>
                     </div>
                  </div>
                  <div className='flex justify-start items-center gap-1'>
                     <div className='text-slate-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link-2" style={{ transform: 'rotate(-45deg)' }}>
                           <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                           <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                           <line x1="8" x2="16" y1="12" y2="12" />
                        </svg>
                     </div>
                     <a href="https://github.com/S-Alvarad" target="_blank" rel="noopener noreferrer" className='h1 font-semibold text-sm hover:text-slate-600'>github.com</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
