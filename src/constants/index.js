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
    mysql,
    iiitd,
    neuralODE,
    raft,
    marketplace,
    kmeans,
    threejs,
    cpu,
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
      name: "MySQL",
      icon: mysql,
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
      name: "Stock Market Returns Prediction",
      description:
        "Benchmarked various models on the task of predicting Stock Market Returns using the classical ARIMA method, hybrid PCA-DNN model and State of the Art Deep Learning Models such as CNN variants, Neural ODE variants and GAN, trained on CNNPred Dataset.",
      tags: [
        {
          name: "PyTorch",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit Learn",
          color: "green-text-gradient",
        },
        {
          name: "Pandas",
          color: "pink-text-gradient",
        },
      ],
      image: neuralODE,
      source_code_link: "https://github.com/Vaibtan/Machine-Learning-Project",
    },
    {
      name: "Distributed Database with Modified Raft Consensus",
      description:
        "Implemented a database storing string key-value pairs using Raft Consensus Algorithm, ensuring consistent data replication and fault recovery across the distributed network of nodes and utilized the leader lease mechanism, similar to those used by geo distributed databases such as Cockroach DB and YugaByte DB.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "ZeroMQ",
          color: "green-text-gradient",
        },
      ],
      image: raft,
      source_code_link: "https://github.com/Vaibtan/Distributed-Database-with-Raft-Consensus-Algorithm",
    },
    {
      name: "Cloud Native Online Commodity Trading Platform",
      description:
        "Created a distributed online marketplace system, architected to facilitate direct transactions between buyers and sellers through a central platform hosted on Google Cloud VM instances, leveraging gRPC for communication and Protocol Buffers for efficient data serialization.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "gRPC",
          color: "green-text-gradient",
        },
        {
          name: "ProtoBuf",
          color: "pink-text-gradient",
        },
      ],
      image: marketplace,
      source_code_link: "https://github.com/Vaibtan/CSE-530-Distributed-Systems/tree/main/Assignment%201/gRPC",
    },
    {
      name: "K Means using Map Reduce Framework",
      description:
        "Implemented a distributed Map-Reduce framework comprising of Master, Mapper and Reducer components to perform K Means Clustering on a given dataset ensuring fault tolerance for both components and utlized gRPC for communication among the three processes for each iteration.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "gRPC",
          color: "green-text-gradient",
        },
      ],
      image: kmeans,
      source_code_link: "https://github.com/Vaibtan/CSE-530-Distributed-Systems/tree/main/Assignment%202",
    },
    {
      name: "Cycle Accurate Simulator for a 5 stage RISC CPU",
      description:
        "Implemented a simulator for a processor based on RV32I variant of RISC-V ISA where the microarchitecture included a 5 stage pipeline allowing forwarding/bypassing and separate execution unit for Network on Chip operations,along with a 2-way set associative cache following Least Recently Used replacement policy.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
      ],
      image: cpu,
      source_code_link: "https://github.com/Vaibtan/CSE511_CA_project",
    },
  ];
  
  export { services, technologies, experiences, projects };