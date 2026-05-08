import { achievementsContent } from "../data/content";

export default function AchievementsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">

      {/* Soft Background Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-purple-600 uppercase tracking-[4px] text-sm font-semibold mb-3">
            Our Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Numbers That Define Excellence
          </h2>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {achievementsContent.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/80 backdrop-blur-md border border-purple-100 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* Number */}
              <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent font-heading">
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-gray-700 mt-3 text-sm md:text-base font-medium">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}