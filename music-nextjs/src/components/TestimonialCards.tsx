"use client"
const musicSchoolTestimonials = [
    
    {
        quote: 'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
        name: 'Alex Johnson',
        title: 'Guitar Student',
    },
    {
        quote: 'The atmosphere at the music school is incredibly inspiring. Im, ve grown so much as a musician since I started here. Highly recommend!',
        name: 'Emily Chen',
        title: 'Piano Student',
    },
    {
        quote: 'I ve attended several music schools, but none have compared to this one. The personalized attention and support from the faculty are unmatched.',
        name: 'Michael Rodriguez',
        title: 'Drum Student',
    },
    {
        quote: 'The music school has provided me with invaluable opportunities to perform and collaborate with other talented musicians. It s been an incredible journey!',
        name: 'Sophia Lee',
        title: 'Vocal Student',
    },
    {
        quote: 'As a beginner, I was nervous about starting music lessons, but the friendly and encouraging environment at the music school put me at ease. I ve made so much progress!',
        name: 'Ethan Smith',
        title: 'Violin Student',
    },
    {
        quote: 'The faculty not only teach music skills but also foster a love and appreciation for music that goes beyond the classroom. I m grateful for their dedication.',
        name: 'Isabella Martinez',
        title: 'Flute Student',
    },
    {
        quote: 'Attending the music school has been one of the best decisions I ve ever made. It s like a second home where I can explore my passion for music freely.',
        name: 'David Kim',
        title: 'Trumpet Student',
    }
];
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function MusicSchoolTestimonials() {
    return (
      <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
          <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
          <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-6xl">
              <InfiniteMovingCards
                  items={musicSchoolTestimonials}
                  direction="right"
                  speed="slow"
        />
        
              </div>
          </div>
      </div>
    )
  }
  
  export default MusicSchoolTestimonials