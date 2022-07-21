const SchedulingType = () => {
  const image =
    "http://www.dermalina.com/wp-content/uploads/2020/12/no-image.jpg";
  const cardData = [
    {
      image: image,
      heading: "One-on-one",
      para: "Let your clients and colleagues select open meeting types from your schedule",
    },
    {
      image: image,
      heading: "Group",
      para: "Book events for multiple attendees such as webinars and training sessions",
    },
    {
      image: image,
      heading: "Collective",
      para: "Schedule across your team’s calendars for events you co-host with others",
    },
    {
      image: image,
      heading: "Round robin",
      para: "Balance hosting responsibilities for your team automatically",
    },
  ];
  return (
    <section className="w-full text-center mt-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-primary">
          Scheduling for any meeting type.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {cardData.map((data) => (
          <Card data={data} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ data }: any) => {
  return (
    <div className="card w-80 h-80 bg-base-100 shadow-xl border border-primary">
      <figure className="h-40">
        <img
          src={data.image}
          alt="Shoes"
          className="rounded-xl w-full h-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.heading}</h2>
        <p>{data.para}</p>
      </div>
    </div>
  );
};

export default SchedulingType;
