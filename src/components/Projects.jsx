import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'


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
    </>
  )
}

export default SectionWrapper(Projects, "projects");