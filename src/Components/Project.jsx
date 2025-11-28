export default function Project() {
  return (
    <section
      id="Project"
      className="min-h-screen bg-gray-900 px-6 md:px-24 py-24"
    >
      
      <h2 className="text-5xl font-extrabold text-yellow-400 mb-20 text-center tracking-widest drop-shadow-lg">
        My Projects
      </h2>

  
      <div className="flex flex-col md:flex-row items-center gap-20">

       
        <div className="flex-[1.2] flex justify-center items-center relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl w-full max-w-xl md:max-w-2xl group">
            <img
              src="/Projectpic.jpg"
              alt="Appointments Booking Website"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] duration-700"></div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center space-y-7 bg-white backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/50">
          
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Appointments Booking Website
          </h3>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            A fully functional <span className="font-semibold">MERN stack</span> application for managing client appointments efficiently. 
            It securely collects client information, schedules appointments, and manages the entire visa process workflow with automation.
          </p>

          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Key Features:</h4>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg md:text-xl">
              <li>Secure client data collection and storage</li>
              <li>Visa process workflow & documentation automation</li>
              <li>Real-time appointment scheduling & tracking</li>
              <li>Admin dashboard for monitoring bookings</li>
              <li>Responsive design (desktop + mobile)</li>
              <li>REST API communication with backend</li>
            </ul>
          </div>

       
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack:</h4>
            <div className="flex flex-wrap gap-4">
              {["React.js", "Node.js", "Express.js", "MongoDB"].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-900 text-white rounded-full font-medium shadow-md hover:bg-gray-700 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href="#"
            className="inline-block mt-6 px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-xl shadow-lg hover:bg-gray-700 transition-colors duration-300"
          >
            View Project
          </a>
        </div>

      </div>
    </section>
  );
}
