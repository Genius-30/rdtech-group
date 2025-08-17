import { CheckCircle, Leaf, Lightbulb, ShieldCheck, Users } from "lucide-react";

import Newsletter from "./newsletter";
import { SafeImage } from "./ui/safe-image";

const values = [
  {
    icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
    title: "Excellence",
    description: "Delivering the highest quality outcomes on every project.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-green-600" />,
    title: "Integrity",
    description: "Building trust through transparency and accountability.",
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-yellow-500" />,
    title: "Innovation",
    description: "Embracing change and leading with new technologies.",
  },
  {
    icon: <Users className="w-12 h-12 text-purple-600" />,
    title: "Collaboration",
    description: "Partnering with clients, vendors, teams for shared success.",
  },
  {
    icon: <Leaf className="w-12 h-12 text-emerald-500" />,
    title: "Sustainability",
    description: "Creating solutions that are mindful of environment.",
  },
];

export default function About() {
  return (
    <>
      {/* Parallex Section */}
      <section
        className="relative h-[80vh] bg-fixed bg-bottom bg-cover"
        style={{ backgroundImage: "url('/about/dubai_1.jpg')" }}
        data-header-theme="light"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-2xs text-shadow-black">
            Crafting Excellence Together
          </h1>
          <p className="text-white max-w-4xl text-lg text-shadow-2xs text-shadow-black">
            For over three decades, RDTech Group has been at the forefront of
            technological innovation, infrastructure excellence, and secure
            operations in the UAE and beyond. What began as a specialized
            security solutions provider has grown into a multi-disciplinary
            powerhouse — integrating ICT, ELV, construction, and automation
            expertise under one group.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-shadow-black/30 text-shadow-sm text-accent mb-2">
                150+
              </div>
              <div className="text-black text-lg">Complete Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-shadow-black/30 text-shadow-sm text-accent mb-2">
                100+
              </div>
              <div className="text-black text-lg">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-shadow-black/30 text-shadow-sm text-accent mb-2">
                200+
              </div>
              <div className="text-black text-lg">Customer Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-shadow-black/30 text-shadow-sm text-accent mb-2">
                30+
              </div>
              <div className="text-black text-lg">Wining Award</div>
            </div>
          </div>
          <div className="text-center my-10">
            <p className="text-gray-700  max-w-3xl mx-auto">
              From our first structured cabling project to deploying intelligent
              building control systems across luxury developments, our journey
              is defined by a relentless drive for quality, speed, and customer
              success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SafeImage
                src="/about/planning.png"
                alt="Construction planning and blueprints"
                width={500}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To empower clients with innovative, reliable, and future-ready
                solutions that enhance safety, efficiency, and performance
                across diverse industries. We are dedicated to helping
                organizations stay ahead in a rapidly evolving world by blending
                human expertise with cutting-edge technology. Through our
                commitment to quality, innovation, and customer success, we
                ensure that every solution is designed to meet present needs
                while anticipating future challenges.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-700">
                    Delivering Future-Ready Solutions Across Sectors
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-700">
                    Enhancing Safety, Efficiency, and Performance
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-700">
                    Combining Human Expertise with Technology
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-700">
                    Adapting to Evolving Industry Challenges
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To be the most trusted and respected partner for delivering
                innovative, reliable, and future-ready solutions that drive
                safety, efficiency, and performance across industries. We
                envision a future where technology and human expertise work hand
                in hand to create smarter, more sustainable systems and
                communities. By staying ahead of global trends and industry
                needs, we aim to progress, set new standards of excellence, and
                help our clients thrive in a world of constant change.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-700">
                    Becoming the Most Trusted Industry Partner
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-700">
                    Setting New Standards of Excellence
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-700">
                    Driving Innovation and Sustainable Growth
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-700">
                    Anticipating and Adapting to Future Needs
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <SafeImage
                src="/about/crane.jpg"
                alt="Modern construction site with workers"
                width={500}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
            How We do Work
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            We follow a collaborative and transparent process, ensuring clear
            communication and expert execution at every stage of the project.
            From initial concept to final delivery.
          </p>

          {/* Video Thumbnail with Play Button */}
          <div className="relative w-full mx-auto rounded-xl overflow-hidden shadow-lg">
            <video
              className="w-full h-auto object-cover"
              poster="/about/construction-thumbnail.jpg"
              muted
              loop
              autoPlay
              playsInline
            >
              <source src="/about/construction.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-16 mb-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Our Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            These guiding principles define who we are, shape our decisions, and
            drive the way we work. They ensure every project reflects our
            commitment to excellence, trust, innovation, collaboration, and a
            sustainable future.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="bg-white p-6 rounded-full shadow-lg flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-black text-gray-300 pt-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </div>
    </>
  );
}
