import Hero from "@/components/Hero";
import { photos } from "@/data";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='pt-[70vh] md:pt-[60vh] md:px-5 flex flex-col items-center gap-40'>
        {photos.map((e) => (
          <div key={e.id} className='w-[400px] md:w-full aspect-[4/5] group relative overflow-hidden'>
            <img
              src={e.image}
              alt={e.name}
              className='absolute w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-125 duration-300'
            />
            <div className='flex justify-between absolute bottom-0 w-full p-5'>
              <span>
                {e.id}<br />
                F/{e.aperture}
              </span>
              <span className='text-right'>
                {e.name}<br />
                {e.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
