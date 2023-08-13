import React from "react";
import "/Users/piyush/course-selling -app/course-selling-app/src/components/home.css";
import FieryWarriorButton from "./Button";

function Home() {
  return (
    <>
      <section className="relative home">
        <img
          src="src/assets/kalaripayattu/bg-home (1).png"
          alt="main image"
          title="Become a Fighter"
          className="w-full"
        />
        <div className="absolute top-1/4 left-1/3 transform -translate-x-3/4 -translate-y-1/4 text-center font">
          <h1 className="text-gradient font text-4xl mb-5"> Become a </h1>

          <FieryWarriorButton />
        </div>
      </section>
      <section class="p-6 bg-gray-100">
        <p class="text-lg font-semibold mb-4">
          The kalarippayattu martial art is also simply known as ‘Kalari’ which
          means battlefield. It means the ‘practice I the art of the
          battlefield’. The practise of kalarippayattu was said to be originated
          from the ‘dhanur Veda.
        </p>
        <p class="mb-4">
          Now, wait, everyone knows ‘Dhanur Veda’ is the science of archery but
          as the rules of Vedas go, “Dhanur Veda” includes all forms of fighting
          arts. Although Dhanur Veda seems to have distinct battlefield
          strategies, it mostly focused on martial techniques and practices.
        </p>
        <p class="mb-4">
          We also find the word ‘Kalari’ in ancient texts like ‘agam’ and
          ‘puram’ when describing the combat styles and the weapons used for
          war. Sangam literature also describes the art of kalarippayattu and
          the usage of spears, swords, shields, and silambam. The kalaripayattu
          teaches the 108 most vital points in the human body. But they taught
          only this technique to promising and incredibly talented fighters as
          even the slightest wrong move can kill a person, this is called the
          marmam technique, and these unknown death points in our body are
          called marmam points. Rigveda mentions that Lord Indra defeated the
          demon Vritasura using one of the marmam techniques of Kalari.
        </p>
        <p>
          During the 6th century, one of the well-known ayurvedic practitioners
          called sage sushrutha did immense research and identified the 108
          vital points of the human body and compiled it in his book “Sushruta
          Samhita”. Out of these, 94 points were considered deadly and lethal if
          got properly struck with a fist or a stick.
        </p>
      </section>
      <p>KALARI Training</p>
      <section className="flex flex-wrap justify-center items-center bg-orange-300 p-8">
        <div className="p-4 text-center relative group">
          <img
            src="src/assets/artforms/Meythozhil_(Meypayattu)-20022020134802.jpg"
            alt="meythari"
            className="rounded-lg shadow-md w-64 h-64 object-cover transition-transform duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg"
          />
          <p className="mt-2 text-lg font-semibold text-gray-800">MEYTHARI</p>
          <div className="overlay absolute inset-0 rounded-lg bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
        </div>

        {/* Repeat the same structure for other items */}

        <div className="p-4 text-center relative group">
          <img
            src="src/assets/artforms/kolthari.jpg"
            alt="kolthari"
            className="rounded-lg shadow-md w-64 h-64 object-cover transition-transform duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg"
          />
          <p className="mt-2 text-lg font-semibold text-gray-800">KOLTHARI</p>
          <div className="overlay absolute inset-0 rounded-lg bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
        </div>

        {/* Repeat the same structure for other items */}

        <div className="p-4 text-center relative group">
          <img
            src="src/assets/artforms/ankathari.jpeg"
            alt="ankathari"
            className="rounded-lg shadow-md w-64 h-64 object-cover transition-transform duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg"
          />
          <p className="mt-2 text-lg font-semibold text-gray-800">KANTHARI</p>
          <div className="overlay absolute inset-0 rounded-lg bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
        </div>

        {/* Repeat the same structure for other items */}

        <div className="p-4 text-center relative group">
          <img
            src="src/assets/artforms/verumkai.jpg"
            alt="verumkai"
            className="rounded-lg shadow-md w-64 h-64 object-cover transition-transform duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg"
          />
          <p className="mt-2 text-lg font-semibold text-gray-800">VERUMKAI</p>
          <div className="overlay absolute inset-0 rounded-lg bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
        </div>
      </section>

     
    </>
  );
}

export default Home;
