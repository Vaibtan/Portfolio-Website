import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants = {fadeIn("up", "spring", index * 0.5 * 0.75)}>
      <Tilt
        options = {{
          max: 45,
          scale: 1, 
          speed: 450
        }}
        className = "bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className = 'relative w-full h-[230px]'>
          <img 
            src = {image}
            alt = {name}
            className = 'w-full h-full object-cover rounded-2xl'
          />
          <div className = 'absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick = {() => window.open(source_code_link, "_blank")}
              className = 'black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src = {github}
                alt = 'github'
                className = 'w-1/2 h-1/2 object-contain'
              />
            </div>
          </div> 
        </div>
        <div className = 'mt-5'>
          <h3 className = 'text-white font-bold text-[25px]'>{name}</h3>
          <p className = 'mt-2 text-secondary font-bold text-[19px]'>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <> 
      <motion.div variants = {textVariant()}>
        <h2 className = {styles.sectionHeadText}>
          Highlighted Projects.
        </h2>
      </motion.div>
      <motion.p
        variants = {fadeIn("", "", 0.1, 1)}
       className = 'mt-5 text-secondary text-[25px] font-bold max-w-4xl leading-[40px]'  
      >
        Following projects are some of my proudest works. Each project is briefly described with links to code repositories. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </motion.p>
      <div className = 'mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key = {`project-${index}`} 
            index = {index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects");