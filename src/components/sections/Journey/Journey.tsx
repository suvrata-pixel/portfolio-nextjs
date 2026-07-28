import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Code2,
  Laptop,
} from "lucide-react";

type JourneyItem = {
  year: string;
  title: string;
  institution?: string;
  icon: React.ElementType;
};

const journey: JourneyItem[] = [
  {
    year: "2014",
    title: "M.Sc. Physics",
    institution: "St. Aloysius College, Mangalore",
    icon: GraduationCap,
  },
  {
    year: "2017",
    title: "Data Indexing",
    institution: "Molecular Connections Pvt Ltd, Bangalore",
    icon: Briefcase,
  },
  {
    year: "2019 – 2021",
    title: "B.Ed.",
    institution: "MCCTE, Mahe",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "Mathematics Teacher",
    institution: "St. Anne's High School, Bangalore",
    icon: BookOpen,
  },
  {
    year: "2024",
    title: "Online Mathematics Tutor",
    institution: "Angle BeLearn Pvt Ltd",
    icon: BookOpen,
  },
  {
    year: "2024",
    title: "Web Development",
    institution: "MERN • React • JavaScript",
    icon: Code2,
  },
  {
    year: "2025 – Present",
    title: "Full Stack Development",
    institution: "MERN • Next.js • TypeScript",
    icon: Laptop,
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-[#F8F3FF] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600">
            My Path
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            My Journey
          </h2>

          <p className="max-w-2xl text-lg leading-8 text-gray-600">
            From physics and education to full-stack development, every step
            has shaped the way I think, learn and build.
          </p>
        </div>

        
        <div className="overflow-x-auto pb-6">
          <div className="relative flex min-w-[1200px] items-start justify-between px-6 pt-8 sm:min-w-[1450px] sm:px-8">
            
            <div className="absolute left-6 right-6 top-[3.25rem] h-px bg-violet-200 sm:left-8 sm:right-8" />

            {journey.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className="group relative z-10 flex w-44 shrink-0 flex-col items-center text-center"
                >
                  
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-violet-200 bg-white shadow-[0_8px_24px_rgba(76,29,149,0.1)] transition-all duration-300 group-hover:scale-125 group-hover:border-violet-400 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                    <Icon
                    size={24}
                    strokeWidth={1.8}
                    className="text-violet-600 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  
                  <div className="mt-5 flex flex-col gap-2 transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-sm font-semibold text-violet-600">
                      {item.year}
                    </p>

                    <h3 className="text-base font-semibold leading-6 text-gray-900 transition-colors duration-300 group-hover:text-violet-700">
                      {item.title}
                    </h3>

                    {item.institution && (
                      <p className="text-sm leading-5 text-gray-500">
                        {item.institution}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

            <p className="text-center text-xs text-gray-400 sm:hidden">
              Swipe to explore my journey
            </p>

      </div>
    </section>
  );
}