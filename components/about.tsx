import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="flex justify-center relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-blue-500/30 relative z-10">
                <Image
                  src="/images/profile-photo.png"
                  alt="Yash Kalbande"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Decorative background */}
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-blue-500/10 rounded-lg border border-blue-500/30 backdrop-blur-sm z-0"></div>
            </div>

            {/* Text Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Software Engineer & Data Analyst</h3>
              <p className="text-gray-700 mb-4">
                I am a passionate software engineer and data analyst with expertise in building robust web applications
                and deriving meaningful insights from data. With a strong foundation in both development and analytics,
                I bring a unique perspective to solving complex problems.
              </p>
              <p className="text-gray-700 mb-4">
                My journey in technology began with a fascination for how data can drive decision-making. This led me to
                pursue a career that combines creative problem-solving through code with analytical thinking through
                data analysis.
              </p>
              <p className="text-gray-700 mb-6">
                When I'm not coding or analyzing data, you can find me exploring new technologies, contributing to
                open-source projects, or sharing my knowledge through technical writing and mentoring.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-900">Education</h4>
                  <p className="text-gray-700">B.Tech in Computer Science</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Location</h4>
                  <p className="text-gray-700">Mumbai, India</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Experience</h4>
                  <p className="text-gray-700">3+ Years</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Languages</h4>
                  <p className="text-gray-700">English, Hindi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
