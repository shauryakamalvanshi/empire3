import React from 'react';

const Contactcard = (params) => {
  return (
    <div className="bg-white  w-full mx-auto p-8">
      <div className="flex flex-col items-center justify-center md:items-start md:flex-row">
        <a href="#" className="relative block ml-0">
          <img
            alt="profil"
            src={params.img}
            className="mx-auto object-cover rounded-full h-10 w-10"
          />
        </a>
        <div className="w-full md:w-2/3">
          <p className="text-gray-600 dark:text-black w-full md:w-2/3 m-auto text-left text-lg md:text-3xl">
            <span className="font-bold text-indigo-500  max-lg:mr-auto max-lg:ml-auto">“</span>
          {params.title}
            <span className="font-bold text-indigo-500">”</span>
          </p>
          <div className="flex items-center justify-center mt-8">
            <span className="mr-2 text-lg font-semibold text-indigo-500">{params.detail}</span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactcard;
