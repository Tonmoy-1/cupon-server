import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider";
import Title from "../Components/Title";
import TopBrand from "../Components/TopBrand";
import BrandSaleCard from "../Components/BrandSaleCard";
import CouponTips from "../Components/CouponTips ";
import Review from "../Components/Review";

const Home = () => {
  const allBrands = useLoaderData();
  return (
    <div className="w-10/12 mx-auto">
      <Slider></Slider>
      <Title
        title={"Top Brands"}
        description={
          "Explore a curated selection of top brands known for their innovation,quality, and industry leadership. These trusted names set the standard for excellence and shape the future of their respective markets."
        }
      ></Title>
      <TopBrand data={allBrands}></TopBrand>
      <Title
        title={"Brand On Sale"}
        description={
          "Partner with us to showcase and sell your brand to a global audience. Reach new customers, expand your market presence, and grow your business with our trusted platform and services."
        }
      ></Title>
      <BrandSaleCard data={allBrands}></BrandSaleCard>
      <Review></Review>
      <CouponTips></CouponTips>
    </div>
  );
};

export default Home;
