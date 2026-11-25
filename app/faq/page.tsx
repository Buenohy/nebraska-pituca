import React from 'react';

export default function FaqPage() {
  return (
    <div className="flex flex-col items-center w-full bg-zinc-50 dark:bg-black">
      <div className="flex w-full max-w-7xl flex-col py-8 px-6 sm:px-12 lg:px-16 gap-8 items-center justify-center">
        <h3 className="text-pituca-primary text-4xl font-bold text-center mt-20">
          Perguntas frequentes
        </h3>
        <p className="text-lg text-center text-pituca-tertiary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ducimus
          accusamus voluptate rem eius, blanditiis excepturi itaque perferendis,
          doloremque autem ad? Quibusdam tempora maxime id? Vel molestiae fugiat
          quisquam corporis.
        </p>
      </div>
    </div>
  );
}
