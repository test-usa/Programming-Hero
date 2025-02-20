import circleImg from "../../assets/course details/check-circle.svg"

const Step = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 pt-10 w-[85%] mx-auto">
       <div className="bg-[#161626] p-4 rounded-lg flex gap-3 items-start  w-full">
           <img src={circleImg} alt="" /> 
           
           <div className="">
            <h3 className="text-lg text-[#42AE64]">Foundations First</h3>
            <p className="text-base text-white/50 pt-2 leading-6">Begin your journey with the basics, learning HTML, CSS, Tailwind and DaisyUI</p>
           </div>
       </div> 
       <div className="bg-[#161626] p-4 rounded-lg flex gap-3 items-start   w-full">
           <img src={circleImg} alt="" /> 
           
           <div className="">
            <h3 className="text-lg text-[#42AE64]">Next Steps</h3>
            <p className="text-base text-white/50 pt-2 leading-6">Move on to JavaScript, covering DOM manipulation, API integration, ES6 features, debugging, and using developer tools.</p>
           </div>
       </div>  
        <div className="bg-[#161626] p-4 rounded-lg flex gap-3 items-start   w-full">
           <img src={circleImg} alt="" /> 
           
           <div className="">
            <h3 className="text-lg text-[#42AE64]">React and Beyond</h3>
            <p className="text-base text-white/50 pt-2 leading-6">Dive into React, including React Router, hooks, context API, Tanstack query, Axios, payment method, and recharts for creating dynamic UIs.</p>
           </div>
       </div> 
       <div className="bg-[#161626] p-4 rounded-lg flex gap-3 items-start  w-full">
           <img src={circleImg} alt="" /> 
           
           <div className="">
            <h3 className="text-lg text-[#42AE64]">Server-Side Skills</h3>
            <p className="text-base text-white/50 pt-2 leading-6">Explore backend technologies like Firebase, Node.js, Express, and MongoDB. Learn to build secure APIs with JWT tokens.</p>
           </div>
       </div> 
        <div className="bg-[#161626] p-4 rounded-lg flex gap-3 items-start  w-full">
           <img src={circleImg} alt="" /> 
           
           <div className="">
            <h3 className="text-lg text-[#42AE64]">Practical Application</h3>
            <p className="text-base text-white/50 pt-2 leading-6">Put theory into practice by working on over 45 projects throughout the course.</p>
           </div>
       </div>  <div className="bg-[#161626] p-4 rounded-lg flex gap-3 items-start  w-full">
           <img src={circleImg} alt="" /> 
           
           <div className="">
            <h3 className="text-lg text-[#42AE64]">Engaging Learning Approach</h3>
            <p className="text-base text-white/50 pt-2 leading-6">Benefit from a fun and interactive learning strategy developed by Programming Hero, refined through years of teaching experience, to help you complete the course successfully.</p>
           </div>
       </div>
    </div>
  )
}

export default Step
