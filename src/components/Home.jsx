import React from "react";
import FieryWarriorButton from "./Button";


function Home() {
  return (
    <div>
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
        <div>
        <p class="text-lg font-semibold mb-4">
        Kalaripayattu is an ancient Indian martial art form that originated in the state of Kerala. It is considered one of the oldest fighting systems in existence and has a history that dates back over 3,000 years. Kalaripayattu encompasses a comprehensive training system that includes physical conditioning, flexibility exercises, strikes, kicks, grappling, weaponry, and healing techniques.
        </p>
        <p class="mb-4">
        The practice of Kalaripayattu involves intricate and fluid movements, often mimicking the grace of animals and elements found in nature. Kalaripayattu techniques are classified into various levels, with students progressing from basic stances and strikes to more advanced forms and weaponry. Traditional weapons such as swords, shields, daggers, and staffs are integral to the art and are taught alongside the empty-handed techniques.
        </p>
        <p class="mb-4">
        In recent times, Kalaripayattu has gained recognition not only as a martial art but also as a cultural practice and a form of physical exercise. It has influenced the development of various other martial arts and performance arts forms, both within India and abroad.
        </p>
        </div>
      </section>

      <section>
      <div className="font">
        <p className="text-center text-3xl  italic">Kalari Training</p>
      </div>
      </section>
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

        <div className="p-4 text-center relative group">
          <img
            src="src/assets/artforms/kolthari.jpg"
            alt="kolthari"
            className="rounded-lg shadow-md w-64 h-64 object-cover transition-transform duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg"
          />
          <p className="mt-2 text-lg font-semibold text-gray-800">KOLTHARI</p>
          <div className="overlay absolute inset-0 rounded-lg bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
        </div>
        <div className="p-4 text-center relative group">
          <img
            src="src/assets/artforms/ankathari.jpeg"
            alt="ankathari"
            className="rounded-lg shadow-md w-64 h-64 object-cover transition-transform duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg"
          />
          <p className="mt-2 text-lg font-semibold text-gray-800">KANTHARI</p>
          <div className="overlay absolute inset-0 rounded-lg bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
        </div>

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
    </div>
  );
}

export default Home;
