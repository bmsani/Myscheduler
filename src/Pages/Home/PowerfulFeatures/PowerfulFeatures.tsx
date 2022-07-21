const PowerfulFeatures = () => {
  const cardData = [
    {
      icon: 'https://img.freepik.com/free-vector/alert-concept-illustration_114360-238.jpg?t=st=1658382151~exp=1658382751~hmac=4ac206dffa9aa573ea315b73443fc6b7f4351ff0752424db8ae8f2cc9a69f131&w=740',
      heading: "Reduce no shows with reminders",
      para: "Automatic reminders and notifications significantly reduce no shows and admin work.",
    },
    {
      icon: 'https://greenspector.com/wp-content/uploads/2021/03/Visioconferences_app_comparatif_greenspector_mars_20212-min.png',
      heading: "Video/Virtual meeting links",
      para: "Automatically create unique Zoom, Google Meet, and MS Teams links for meetings scheduled.",
    },
    {
      icon: 'https://img.freepik.com/free-vector/flat-hand-drawn-time-management-illustration_23-2148829093.jpg',
      heading: "Custom available and control",
      para: "Set up custom availability, padding between appointments and appointment duration.",
    },
  ];
  return (
    <section className="w-full text-center">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary">Powerful features</h1>
        <p className="font-medium">
          Simple, easy to use features to help automate scheduling with your
          customers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center space-x-20">
        {cardData.map((data) => (
          <PowerCard data={data} />
        ))}
      </div>
    </section>
  );
};

const PowerCard = ({ data }: any) => {
  return (
    <div className="hover:bg-white text-center w-60 px-4 py-6 rounded">
      <img className="mx-auto" src={data.icon} alt="" />
      <p className="font-bold text-xl bg-transparent">{data.heading}</p>
      <p className="text-xs font-medium text-gray-400 bg-transparent">
        {data.para}
      </p>
    </div>
  );
};

export default PowerfulFeatures;
