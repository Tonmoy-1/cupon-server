import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const TopBrand = ({ data }) => {
  return (
    <Marquee pauseOnHover={true}>
      <div className="flex gap-3 my-10 justify-center items-center ">
        {data.map((brandlogo) => (
          <div key={brandlogo._id}>
            <div>
              <Link to={`/brands/${brandlogo._id}`}>
                <img
                  src={brandlogo.brand_logo}
                  className="w-52 h-52 mr-2 rounded-lg"
                  alt=""
                />
              </Link>
              <p className="text-center">{brandlogo.brand_name}</p>
            </div>
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default TopBrand;
