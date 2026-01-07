import SectionTitle from "./SectionTitle"
import GlassCard from "./GlassCard"

export default function Education() {

  let education = [
    {
      edu_img: "https://upload.wikimedia.org/wikipedia/en/f/f6/Savitribai_Phule_Pune_University_Logo.png",
      qualification : "Bachelor of Engineering (Information Technology)",
      affiatedTo : "Savitribai Phule Pune University",
      grade : "CGPA : 8.06",
      timeline : "Aug 2021 - Jun 2025"
    },{
      edu_img: "https://images.jdmagicbox.com/v2/comp/hyderabad/b6/040pxx40.xx40.180531175910.z4b6/catalogue/sri-chaitanya-junior-college-chanda-nagar-hyderabad-colleges-g2tsgxdeqb.jpg",
      qualification : "Sri Chaitanya Jr. College, Hyderabad",
      affiatedTo : "11th - 12th",
      grade : "89.8%",
      timeline : "Jun 2021"
    },{
      edu_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXsGtMyl5cJ7OV03JiMZAajoKy55ZzYEGMeg&s",
      qualification : "Shri Chhatrapati Shahu Maharaj Sainik School",
      affiatedTo : "SSC - 10th",
      grade : "84.2%",
      timeline : "Jun 2019"
    },
  ]

  return (
    <section id="education" className="py-28 px-6">
      <SectionTitle
        title="Education"
        subtitle="Academic background"
      />

      <div className="max-w-4xl mx-auto">
        {education.map(edu => (
          <GlassCard key={edu.qualification}>
            {/* <GlassCard> */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

                {/* Left: University Logo */}
                <div className="shrink-0">
                  <img
                    src={edu.edu_img}
                    alt={edu.affiatedTo}
                    className="w-24 h-24 object-contain rounded-lg bg-white p-2"
                  />
                </div>

                {/* Right: Education Details */}
                <div className="flex-1 w-full">

                  {/* Degree + CGPA */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h3 className="text-xl font-semibold text-white">
                      {edu.qualification}
                    </h3>
                    <p className="text-gray-300 mt-1 md:mt-0 font-semibold">
                      {edu.grade}
                    </p>
                  </div>

                  {/* University + Duration */}
                  <div className="flex flex-col md:flex-row md:justify-between mt-2">
                    <p className="text-gray-300">
                      {edu.affiatedTo}
                    </p>
                    <p className="text-gray-300 mt-1 md:mt-0">
                      {edu.timeline}
                    </p>
                  </div>
                </div>
              </div>
            {/* </GlassCard> */}
            
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
