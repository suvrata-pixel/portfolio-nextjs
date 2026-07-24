type JourneyItem = {
  year: string;
  title: string;
  institution?: string;
};

const journey: JourneyItem[] = [
  {
    year: "2014",
    title: "M.Sc. Physics",
    institution: "Institution Name",
  },
  {
    year: "2017",
    title: "Data Indexing",
    institution: "Company Name",
  },
  {
    year: "2019 – 2021",
    title: "B.Ed.",
    institution: "Institution Name",
  },
  {
    year: "2023",
    title: "Mathematics Teacher",
    institution: "School Name",
  },
  {
    year: "2024",
    title: "Online Mathematics Tutor",
    institution: "Company Name",
  },
  {
    year: "2024",
    title: "Web Development",
    institution: "MERN • React • JavaScript",
  },
  {
    year: "2025 – Present",
    title: "Full Stack Development",
    institution: "MERN • Next.js • TypeScript",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-8 bg-[#F8F3FF]"
    >
      <h2 className="text-4xl font-bold">
        My Journey
      </h2>

      <div className="flex flex-col gap-8">
        {journey.map((item) => (
          <div key={`${item.year}-${item.title}`}>
            <p>{item.year}</p>

            <h3>{item.title}</h3>

            {item.institution && (
              <p>{item.institution}</p>
            )}

            
          </div>
        ))}
      </div>
    </section>
  );
}