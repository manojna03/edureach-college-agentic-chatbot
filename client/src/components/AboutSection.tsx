import { aboutContent, images } from "../data/content";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side Images */}
          <div className="relative">

            {/* Main Image */}
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={images.collegeClassroom}
                alt="Classroom"
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Small Image */}
            <div className="absolute -bottom-8 -right-8 hidden md:block">
              <img
                src={images.tech1}
                alt="Technology"
                className="w-44 h-44 object-cover rounded-2xl border-4 border-white shadow-2xl"
              />
            </div>

            {/* Decorative Blur Circle */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-300/30 rounded-full blur-3xl -z-10"></div>

            <div className="absolute bottom-10 left-0 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Right Side Content */}
          <div>

            {/* Subtitle */}
            <p className="text-purple-700 font-semibold text-sm uppercase tracking-[3px] mb-3">
              {aboutContent.subtitle}
            </p>

            {/* Title */}
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {aboutContent.title}
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              {aboutContent.description}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-5">

              {aboutContent.highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-purple-100 rounded-2xl p-6 text-center shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >

                  {/* Value */}
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    {item.value}
                  </p>

                  {/* Label */}
                  <p className="text-sm text-gray-700 mt-2 font-medium">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}