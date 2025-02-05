import React from 'react'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from 'framer-motion'
import { styles } from '../styles' 
import { Tilt } from 'react-tilt'
import { fadeIn, textVariant } from '../utils/motion';


const SkillCard = ({ index, name, icon }) => {
  return (
    <Tilt className = "xs:w-[250px] w-full">
      <motion.div
        variants = {fadeIn("right", "spring", 0.5 * index, 0.75)}
        className = 'w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options = {{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className = 'bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col'
        >
          <img src = {icon} alt = {name} className = 'w-20 h-20 object-contain' />
          <h3 className = 'text-white text-[23px] font-bold text-center'>
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Skills = () => {
  return (
    <>
      <motion.div>
        <p className = {styles.sectionSubText}>  </p>
        <h2 className = {styles.sectionHeadText}>Skills & Certifications.</h2>
      </motion.div>
      <div className = 'mt-20 flex flex-wrap gap-10'>
        {technologies.map((technology, index) => (
          <SkillCard key = {technology.name} index = {index} {...technology} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Skills, "skills");