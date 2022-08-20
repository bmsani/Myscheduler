const SchedulingType = () => {
  const cardData = [
    {
      id: 1,
      image: "https://i.ibb.co/7bcBVDH/OneOnOne.jpg",
      heading: "One-on-one",
      para: "Let your clients and colleagues select open meeting types from your schedule",
    },
    {
      id: 2,
      image: "https://i.ibb.co/r7CdVyN/Group.jpg",
      heading: "Group",
      para: "Book events for multiple attendees such as webinars and training sessions",
    },
    {
      id: 3,
      image: "https://i.ibb.co/HDWvhFm/collective.jpg",
      heading: "Collective",
      para: "Schedule across your team’s calendars for events you co-host with others",
    },
    {
      id: 4,
      image: "https://i.ibb.co/JjRdL5Q/Round-Robin.jpg",
      heading: "Round robin",
      para: "Balance hosting responsibilities for your team automatically",
    },
  ];
  return (
    <section className="w-full text-center mt-20 px-10">
      <div className="mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
          Scheduling for any meeting type.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {cardData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ data }: any) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          className="lg:w-[200px] xl:w-[250px] h-full"
          src={data.image}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-xl">{data.heading}</h2>
        <p className="text-sm md:text-lg text-justify">{data.para}</p>
      </div>
    </div>
  );
};

export default SchedulingType;
