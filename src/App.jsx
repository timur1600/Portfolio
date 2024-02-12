import { useState } from 'react'
import { CSSTransition } from 'react-transition-group';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <nav className=' flex justify-center top-[1vh]  fixed m-auto w-full  z-100    text-center  transition-all ease-in-out font-[Rajdhani, sans-serif]  ' >
   
  <ul className='sm:text-2xl text-[3vh] p-4   w-fit       rounded-tl-full     rounded-b-full text-center'>


    <li className='space-x-5 font-bold     justify-center items-center '  id='menu'>
      <a href="#">Home</a>
      <a href="#projects">Projects</a>
      <a href="#about">About Me</a>
      <a href="#contact">Contact</a>
    </li>
  </ul>
</nav>


<div className='text-slate-50 text-5xl m-auto mt-40 uppercase headline space-y-10 grid justify-center text-center items-center '>
  <img src="public\luca-bravo-XJXWbfSo2f0-unsplash.jpg" alt=""  className=' absolute opacity-10  border-b-2 border-teal-400 '/>
  <h1 className=' transition-all ease-in-out duration-700 hover:text-teal-300 inline-block  relative  m-auto'>Timur Hasenfratz</h1>
  <h2 className='relative inline-block transition-all ease-in-out duration-700 hover:text-teal-300  m-auto'>Front-End</h2>
  <h3 className=' inline-block relative transition-all ease-in-out duration-700  hover:text-teal-300 m-auto'>Dev</h3>
</div>


<div className='grid   p-4 mt-52 rounded-lg shadow-teal-500 shadow-2xl   ' id='projects'>
  
  <h4 className='text-slate-50 text-5xl text-center  border-2 w-fit border-teal-300 m-auto rounded-lg p-1 my-20 '>
    Projects
  </h4>

  <ul className='grid grid-cols-2 p-2 gap-10 '>
    <li className='proj1 relative container flex justify-center items-center cursor-pointer hover:translate-y-[-20px] transition-all ease-in-out hover:translate-x-[-10px] ' 
    > 
    <img src="public/Proj1.png" alt="" className=' opacity-20 hover:border-2 hover:border-teal-100 hover:shadow-xl hover:shadow-sky-200 blur-sm hover:opacity-100 hover:blur-0 transition-all ease-in-out duration-300 rounded-lg  ' /> 
    <a href="https://profi-clean.org/" className='bg-slate-100 absolute hover:bg-teal-950 hover:text-slate-100 text-2xl transition-all ease rounded-lg p-3'>Profi-Clean</a></li>
    <li className='relative container flex justify-center items-center cursor-pointer hover:translate-y-[-20px] hover:translate-x-[-10px] transition-all ease-in-out '>
      <img src="public/Proj2.png" alt="" className='opacity-20 hover:border-2 hover:border-teal-100 blur-sm hover:opacity-100 hover:blur-0 transition-all ease-in-out duration-300 rounded-lg hover:shadow-xl hover:shadow-sky-200  ' />
      <a href="https://sneak-8b5f5.web.app/" className='bg-slate-100 absolute hover:bg-teal-950 hover:text-slate-100 text-2xl transition-all ease rounded-lg p-3'>Sneakii</a></li>
      <li className='relative container flex justify-center items-center cursor-pointer hover:translate-y-[-20px] transition-all ease-in-out hover:translate-x-[-10px] '>
      <img src="public/Proj2.png" alt="" className='opacity-20 hover:border-2 hover:border-teal-100 blur-sm hover:opacity-100 hover:blur-0 transition-all ease-in-out duration-300 rounded-lg hover:shadow-xl hover:shadow-sky-200  ' />
      <a href="https://sneak-8b5f5.web.app/" className='bg-slate-100 absolute hover:bg-teal-950 hover:text-slate-100 text-2xl transition-all ease rounded-lg p-3'>Codepen</a></li>
      <li className='relative container flex justify-center items-center cursor-pointer hover:translate-y-[-20px] transition-all ease-in-out hover:translate-x-[-10px] '>
      <img src="public/Proj2.png" alt="" className='opacity-20 hover:border-2 hover:border-teal-100 blur-sm hover:opacity-100 hover:blur-0 transition-all ease-in-out duration-300 rounded-lg hover:shadow-xl hover:shadow-sky-200  ' />
      <a href="https://sneak-8b5f5.web.app/" className='bg-slate-100 absolute hover:bg-teal-950 hover:text-slate-100 text-2xl transition-all ease rounded-lg p-3'>Sneakii</a></li>
  </ul>
</div>


<div className='mt-52  rounded-lg  shadow-teal-500 shadow-2xl p-10 grid justify-center m-auto  text-center align-baseline  'id='about'>
  <h4 className='text-slate-50 text-5xl  justify-center ' >AboutME</h4>
  <ul className='flex flex-wrap  justify-center items-center my-10 text-teal-500 text-2xl skills bg-slate-900 gap-5  '>
    <li>
      Java-script
    </li>
    <li>
     (Tailwind) CSS
    </li>
    <li>
      HTML
    </li>
   
    <li>
      nodeJS
    </li>
    <li>
      React
    </li>

    <li>
      Java
    </li>
    <li>
      Git/GitHub
    </li>
    <li>
      Vscode/intelliJ IDEA
    </li>
    <li>
      AWS/Firebase
    </li>
  </ul>
  <p className='text-center text-slate-50 p-4 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quam, deserunt nesciunt minima labore ducimus minus totam itaque, non porro, facilis ipsa! Voluptatum magnam corporis earum impedit excepturi. Fugiat numquam dignissimos commodi, ex recusandae quos autem expedita blanditiis aliquid illum quo, nam repellat ducimus dicta sequi tenetur, amet consectetur? Consectetur laboriosam ducimus reiciendis? Vitae magni illo quo temporibus! Eaque vero aspernatur deleniti ab sunt eligendi culpa fuga. Quod, nostrum mollitia! Assumenda voluptatum amet omnis reprehenderit, ipsam eius, voluptatem explicabo totam fugit quod a quasi quia? Eligendi quo perspiciatis, itaque, incidunt animi, deserunt labore cupiditate facilis quisquam expedita esse ut impedit.</p>
</div>

<div className=' shadow-teal-500 shadow-2xl p-10 mt-24' id='contact'>
  <h4 className='text-slate-50 text-5xl text-center '>Contact</h4>
</div>

    </>
  )
}

export default App
