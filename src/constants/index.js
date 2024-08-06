import {
    mobile,
    backend,
    creator,
    web,
    typescript,
    python,
    C,
    cpp,
    streamlit,
    scikit,
    Pytorch,
    tinygrad,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    iiitd,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Deep Learning Research",
      icon: mobile,
    },
    {
      title: "Low Latency Developer",
      icon: web,
    },
    {
      title: "Quantitative Finance Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: C,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "PyTorch",
      icon: Pytorch,
    },
    {
      name: "Scikit Learn",
      icon: scikit,
    },
    {
      name: "Tinygrad",
      icon: tinygrad,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Streamlit",
      icon: streamlit,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Undergraduate Researcher",
      company_name: "Networks Security and Research Lab @ IIITD",
      icon: iiitd,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "Working on improving latency and throughput for the transfer of live media (large scale videos) from semi-autonomous vehicles to edge servers using State of the Art multipath QUIC protocol based frameworks.",
        "Crtically analyzed and tested XQUIC, a cross platform implementation of QUIC and HTTP/3 protocol by Alibaba and TQUIC, another implementation of multipath QUIC in Rust by Tencent for possible solutions to tackle the aforementioned objective and reported back the results and inconsistencies of the build library.",
        "Currently focussed on building integration solutions for utilizing open source live streaming ecosystem projects using TQUIC framework.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };