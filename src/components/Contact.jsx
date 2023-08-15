import React from 'react'
import kalarivideo2 from "/Users/piyush/course-selling -app/course-selling-app/src/assets/artforms/kalarivideo2.mp4"
import LearnKalaripayattu from "/Users/piyush/course-selling -app/course-selling-app/src/assets/artforms/LearnKalaripayattu.mp4"

function Contact() {
  return (
  <div className='flex justify-center items-center '>
   <video className='w-full h-full object-cover'  src = {kalarivideo2} autoPlay loop  muted =" true"/>
   </div>
 

  )
}

export default Contact