import React from 'react'
import kalarivideo from "/Users/piyush/course-selling -app/course-selling-app/src/assets/artforms/kalarivideo.mp4"

function Training() {
  return (
   <>
   <section>
      <video  src='/Users/piyush/course-selling -app/course-selling-app/src/assets/artforms/kalarivideo.mp4' autoPlay loop  />
      <p>hiii</p>
   </section>
   <section className="flex">
   <div>
     <img
       src="src/assets/artforms/Meythozhil_(Meypayattu)-20022020134802.jpg"
       alt="meythari"
     />
     <p>
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
   </div>
   <div>
     <img src="src/assets/artforms/kolthari.jpg" alt="kolthari" />
     <p>
       Kolthari features the use of various types of sticks – long, short,
       specially fabricated rounded and curved ones – and the student is
       taught to use them to attack as well as to defend. After completing
       the training in Kolthari, the student will be adept at using
       whatever stick he has in possession to resist all kinds of attacks,
       make counter-attacks and overpower enemies.
     </p>
   </div>
   <div>
     <img src="src/assets/artforms/ankathari.jpeg" alt="ankathari" />
     <p>
       Ankathari is the third phase of training using metal weapons. This
       begins with learning how to use a Dagger (kathi/kadara), followed by
       Sword & Shield. Learning to use the Sword & Shield in an efficient
       manner is considered to be the peak of perfection in Kalaripayattu.
       An extraordinary control over the body, agility, a quick eye, and a
       keen presence of mind are necessary for the mastering the use of the
       sword. Other weapons include the ribbon sword (urumi) and the spear.
     </p>
   </div>
   <div>
     <img
       src="src/assets/artforms/verumkai.jpg"
       alt="verumkai"
     />
     <p>
       Verumkai is extremely important in Kalaripayattu. Literally meaning
       “bare hands,” Verumkai trains a person to use his own body as a
       weapon both to defend himself against an armed or unarmed adversary,
       and to overpower him physically. Thus, for the most obvious reasons,
       mastery in Verumkai boosts the self-confidence of the individual.
       Certain palm leaf manuscripts that contain instructions about
       Verumkai have been known to insist that it should be used only for
       self-defence and never for attack.
     </p>
   </div>
 </section>
 </>

  )
}

export default Training