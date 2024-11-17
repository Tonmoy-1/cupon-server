import { useLoaderData } from "react-router-dom";
import SinglecolCard from "../Components/SinglecolCard";

const Brands = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="w-11/12 mx-auto mt-1 bg-green-600 h-[300px]  rounded-xl text-white py-4 px-6 ">
        <div className="mt-20">
          <h1 className="text-4xl  font-semibold text-center">
            Explore Our All Brand And Find Your Destiny
          </h1>
          <h1 className=" w-8/12 mx-auto  mt-5  text-center">
            Discover a diverse range of top brands, each offering unique
            products and opportunities. Explore and choose the perfect match for
            your needs, and unlock the potential for your future success.
          </h1>
        </div>
      </div>
      <SinglecolCard data={data}></SinglecolCard>
    </div>
  );
};

export default Brands;
