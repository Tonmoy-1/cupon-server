/* eslint-disable react/prop-types */
const Title = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-3 mt-5 text-center items-center animate__animated animate__backInLeft">
      <p className="text-center font-bold text-4xl">{title}</p>
      <p className="text-center  w-8/12 ">{description}</p>
    </div>
  );
};

export default Title;
