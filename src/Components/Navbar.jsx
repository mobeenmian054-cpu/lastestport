export const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white text-xl h-16 flex items-center px-6">
      
      <p className="mr-auto font-bold">Mobeen Shahid</p>

      
      <div className="flex justify-center gap-8 flex-1">
        <a href="#Hero" className="hover:text-yellow-400">Hero</a>
        <a href="#Skills" className="hover:text-yellow-400">Skills</a>
         <a href="#Education" className="hover:text-yellow-400">Education</a>
         <a href="#Project" className="hover:text-yellow-400">Project</a>
        <a href="#Contact" className="hover:text-yellow-400">Contact</a>
        
        
       
      </div>
    </div>
  )
}
