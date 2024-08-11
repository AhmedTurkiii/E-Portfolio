import React, { useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import { ThemeContext } from "../themeProvider";

// Example project data
const projects = [
  {
    title: "Weather Web Application (WeatherApp)",
    description: "Collaborated within a team of 4 engineers to develop a Python weather app with multimedia elements for visualizing current weather conditions, integrating Flask, OpenAI, WeatherAPI, and IpstackAPI.",
    techStack: "Python, HTML, CSS, Flask, OpenAI, WeatherAPI, IpstackAPI",
    repoLink: "https://github.com/aleguzmancs9/Weather",
    date: "Sep 2020 - Feb 2021",
    remote: false,
    image: "${process.env.PUBLIC_URL}/5544723.jpg"  // Replace with actual image URL
  },
  {
    title: "Car Services Web Application (Car-Tech)",
    description: "Participated in a team of 4 contributors to make a responsive and consumer-friendly website using PHP, MySQL, HTML5, CSS3, Bootstrap, jQuery, and JavaScript.",
    techStack: "PHP, MySQL, HTML5, CSS3, Bootstrap, jQuery, JavaScript",
    repoLink: "https://github.com/alikhaled17/Car-Tech-TeamB",
    date: "Sep 2020 - Feb 2021",
    remote: true,
    image: "/mechanic-hand-checking-fixing-broken-car-car-service-garage.jpg"  // Replace with actual image URL
  },
  {
    title: "Movie Android App (MovieApp)",
    description: "Built a movie app MVVM architecture, Retrofit for networking, and Dagger Hilt for dependency injection. Built with Kotlin, MVVM, Retrofit, Dagger Hilt, RESTful.",
    techStack: "Kotlin, MVVM, Retrofit, Dagger Hilt, RESTful",
    repoLink: "https://github.com/AhmedTurkiii/Movie",
    date: "Sep 2021 - Present",
    remote: false,
    image: `${process.env.PUBLIC_URL}/3Z_2103.w023.n001.224B.p1.224.jpg`
  }
];

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              repoLink={project.repoLink}
              date={project.date}
              remote={project.remote}
              image={project.image}
            />
          ))}
        </div>
        <a
          href="https://github.com/AhmedTurkiii"
          className="w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
