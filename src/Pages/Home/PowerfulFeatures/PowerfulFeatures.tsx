import icon from "../../../Assets/Images/image.png";

const PowerfulFeatures = () => {
  const cardData = [
    {
      icon: icon,
      heading: "Video/Virtual meeting links",
      para: "Automatically create unique Zoom, Google Meet, and MS Teams links for meetings scheduled.",
    },
    {
      icon: icon,
      heading: "Video/Virtual meeting links",
      para: "Automatically create unique Zoom, Google Meet, and MS Teams links for meetings scheduled.",
    },
    {
      icon: icon,
      heading: "Video/Virtual meeting links",
      para: "Automatically create unique Zoom, Google Meet, and MS Teams links for meetings scheduled.",
    },
  ];
  return (
    <section className="w-full text-center">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary">Powerful features</h1>
        <p className="font-medium">
          Simple, easy to use features to help automate scheduling with your
          customers
        </p>
      </div>
      <div className="flex justify-center space-x-4">
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
      <p className="font-semibold text-sm bg-transparent">{data.heading}</p>
      <p className="text-xs font-medium text-gray-400 bg-transparent">
        {data.para}
      </p>
    </div>
  );
};

export default PowerfulFeatures;