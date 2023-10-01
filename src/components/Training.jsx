import React from 'react'
import kalarivideo2 from "../assets/artforms/kalarivideo2.mp4"
import  { useRef, useEffect } from 'react';

function Training() {

    const secondDivRef = useRef(null);
    const thirdDivRef = useRef(null);
    const fourthDivRef = useRef(null);

    const fadeInObserver = (ref) => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                ref.current.classList.add('fade-in');
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    };

    useEffect(() => {
        fadeInObserver(secondDivRef);
        fadeInObserver(thirdDivRef);
        fadeInObserver(fourthDivRef);
    }, []);

  return (
   <>
   <section className='h-screen fixed  z--1'>
      <video  src= {kalarivideo2} autoPlay loop  muted className='w-full h-full object-cover' />
    
   </section>
   <section className="bg-gray-100  relative Class
Properties
bg-opacity-0	--tw-bg-opacity: 0;
bg-opacity-5	--tw-bg-opacity: 0.05;
bg-opacity-10  inset-0 mt-20 mr-16 ">
   <div className='h-screen flex items-center  space-y-8  inset-0 text-white z-20  space-x-4'>
    
     <p className="w-2/3 items-center text-black p-32" >
       All students of Kalari begin by learning the Meythari, which is a
       set of exercises and movements for the Body. While Meythari
       exercises are mainly focused on developing the body’s strength,
       stamina, flexibility, and speed, Meypayattu, one of the main
       components of Meythari, particularly focuses on improving body
       flexibility and balance through a sequence of defending and
       attacking movements. Meythari forms the base or the foundation for
       learning further techniques in Kalaripayattu so it is best to spend
       time learning it well.
     </p>
     <img
       src="src/assets/artforms/Meythozhil_(Meypayattu)-20022020134802.jpg"
       alt="meythari"
       className="w-1/3 mr-8 items center"
     />
   </div>
   <div className='h-screen flex items-center space-x-4  inset-0 text-white z-20 mt-8' ref={secondDivRef}>
     <p className="w-2/3 items-center p-32">
       Kolthari features the use of various types of sticks – long, short,
       specially fabricated rounded and curved ones – and the student is
       taught to use them to attack as well as to defend. After completing
       the training in Kolthari, the student will be adept at using
       whatever stick he has in possession to resist all kinds of attacks,
       make counter-attacks and overpower enemies.
     </p>
     <img src="src/assets/artforms/kolthari.jpg" alt="kolthari" className="w-1/3" />
   </div>

   <div className='h-screen flex items-center inset-0 text-white z-20 space-x-4' ref={thirdDivRef}>
     <p className="w-2/3 items-center p-32">
       Ankathari is the third phase of training using metal weapons. This
       begins with learning how to use a Dagger (kathi/kadara), followed by
       Sword & Shield. Learning to use the Sword & Shield in an efficient
       manner is considered to be the peak of perfection in Kalaripayattu.
       An extraordinary control over the body, agility, a quick eye, and a
       keen presence of mind are necessary for the mastering the use of the
       sword. Other weapons include the ribbon sword (urumi) and the spear.
     </p>
     <img src="src/assets/artforms/ankathari.jpeg" alt="ankathari"  className="w-1/3"/>
   </div>
   <div className='h-screen flex items-center inset-0 text-white z-20  space-x-4 ' ref={fourthDivRef}>
     <p className="w-2/3 items-center p-32">
       Verumkai is extremely important in Kalaripayattu. Literally meaning
       “bare hands,” Verumkai trains a person to use his own body as a
       weapon both to defend himself against an armed or unarmed adversary,
       and to overpower him physically. Thus, for the most obvious reasons,
       mastery in Verumkai boosts the self-confidence of the individual.
       Certain palm leaf manuscripts that contain instructions about
       Verumkai have been known to insist that it should be used only for
       self-defence and never for attack.
     </p>
     <img
       src="src/assets/artforms/verumkai.jpg"
       alt="verumkai" className="w-1/3"
     />
   </div>
 </section>
 </>

  )
}

export default Training