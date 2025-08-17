import ProjectsGrid from '@/components/projects/grid'
import React from 'react'

function page() {
  return (
    <>
      {/* Parallex Section */}
      <section
        className="relative h-[80vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/projects/skyline.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 ">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-2xs text-shadow-black">
            Turning Vision Into Reality
          </h1>
          <p className="text-white max-w-4xl text-lg text-shadow-2xs text-shadow-black">
            For over 30 years, RDTech Group has executed projects that redefine industries and elevate standards. From government institutions to private enterprises, our track record reflects excellence, innovation, and trust across every sector we serve.
          </p>
        </div>
      </section>

      <ProjectsGrid/>
    </>
  )
}

export default page