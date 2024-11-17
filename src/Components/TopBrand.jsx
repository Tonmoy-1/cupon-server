import Marquee from "react-fast-marquee";

/* eslint-disable react/prop-types */
const TopBrand = ({ data }) => {
  return (
    <Marquee>
      <div className="flex gap-3 my-10 justify-center items-center ">
        {data.map((brandlogo) => (
          <div key={brandlogo._id}>
            <div>
              <img
                src={brandlogo.brand_logo}
                className="w-52 h-52 mr-2 rounded-lg"
                alt=""
              />
              <p className="text-center">{brandlogo.brand_name}</p>
            </div>
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default TopBrand;
