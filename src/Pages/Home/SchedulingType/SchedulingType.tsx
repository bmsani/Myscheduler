import oneOnOne from '../../../Utilities/Image/OneOnOne.jpg'
import Group from '../../../Utilities/Image/Group.jpg'
import collective from '../../../Utilities/Image/collective.webp'
import roundRobin from '../../../Utilities/Image/RoundRobn.jpg'



const SchedulingType = () => {
  const cardData = [
    {
      id: 1,
      image: oneOnOne,
      heading: "One-on-one",
      para: "Let your clients and colleagues select open meeting types from your schedule",
    },
    {
      id: 2,
      image: Group,
      heading: "Group",
      para: "Book events for multiple attendees such as webinars and training sessions",
    },
    {
      id: 3,
      image: collective,
      heading: "Collective",
      para: "Schedule across your team’s calendars for events you co-host with others",
    },
    {
      id: 4,
      image: roundRobin,
      heading: "Round robin",
      para: "Balance hosting responsibilities for your team automatically",
    },
  ];
  return (
    <section className="w-full text-center mt-12 px-10">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-primary">
          Scheduling for any meeting type
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {cardData.map((data) => (
          <Card key={data.id}
            data={data}
          />
        ))}
      </div>
    </section>
  );
};

const Card = ({ data }: any) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure><img className="lg:w-[200px] xl:w-[250px] h-full" src={data.image} alt="Album" /></figure>
      <div className="card-body">
        <h2 className="card-title">{data.heading}</h2>
        <p className='text-justify'>{data.para}</p>
      </div>
    </div>
  );
};

export default SchedulingType;
