import React from 'react'
import kalarivideo1 from "/Users/piyush/course-selling -app/course-selling-app/src/assets/artforms/kalarivideo1.mp4"
import LearnKalaripayattu from "/Users/piyush/course-selling -app/course-selling-app/src/assets/artforms/LearnKalaripayattu.mp4"

function Contact() {
  return (
  <div className='flex justify-center items-center '>
   <video className='w-full h-auto'  src = {kalarivideo1} autoPlay loop  height = "800" muted =" true"/>
   </div>
 

  )
}

export default Contact