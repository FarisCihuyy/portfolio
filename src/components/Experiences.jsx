const Experiences = () => {
  const experiences = [
    {
      year: "2025 - present",
      title: "Teacher",
      description:
        "Taught basic computer skills and Microsoft Office applications to beginners, focusing on practical usage and digital literacy.",
    },
    {
      year: "2025 - present",
      title: "Face Recognition Project",
      description:
        "Developed a face recognition application using Python and OpenCV, enabling real-time identification and verification of individuals.",
    },
    {
      year: "Apr 2025",
      title: "Grocery Dashboard",
      link: "https://id-eate.vercel.app/",
      description:
        "Developed a grocery dashboard using ReactJS and Tailwind CSS, offering a user-friendly interface for managing grocery inventory.",
    },
  ];

  return experiences.map((experience) => {
    return (
      <li key={experience.title} className="flex gap-4 items-start">
        <p className="basis min-w-[87px] text-right">{experience.year}</p>
        <div>
          <h4 className="font-medium text-base leading-none mb-2">
            {experience.title}.
          </h4>
          <p className="text-justify">{experience.description}</p>
        </div>
      </li>
    );
  });
};

export default Experiences;
