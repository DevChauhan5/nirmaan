import React from 'react';
import Link from 'next/link';


const EventCard = ({ event }:{event:any}) => {
  const { title, image, description, slug } = event;

  return (
    <div className="mb-8 border-b border-gray-200 pb-4">
      <Link href={`/events/${slug}`}>
        <a className="block">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        </a>
      </Link>
      <div className="mt-4">
        <Link href={`/events/${slug}`}>
          <a className="text-xl font-bold text-gray-800 hover:text-blue-500">{title}</a>
        </Link>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

const Events = () => {
  // if (!events || events.length === 0) {
  //   return <p className="text-center text-gray-600 py-12 text-5xl">No events available.</p>;
  // }

  return (
    <p className="text-center text-gray-600 py-12 text-5xl">No events available.</p>
    // <section id='events' className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
    //   <h2 className="text-3xl font-bold text-center mb-8">Events @ Nirmaan&apos;24</h2>
    //   {events.map((event:any) => (
    //     <EventCard key={event.id} event={event} />
    //   ))}
    // </section>
  );
};

export default Events;
