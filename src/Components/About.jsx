import developer from "../assets/developer.jpg";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full mx-auto mt-1 bg-gradient-to-r from-teal-400 to-cyan-600 h-[300px] rounded-xl text-white py-8 px-6 flex flex-col items-center justify-center shadow-lg">
        <h1 className="text-2xl md:text-6xl mb-4 font-bold text-center drop-shadow-md">
          Designer
        </h1>
        <h2 className="text-lg md:text-4xl font-medium text-center drop-shadow-md">
          Welcome To My WebConner
        </h2>
      </div>

      {/* Image Section */}
      <div className="my-8 flex justify-center">
        <img
          src={developer}
          className="w-11/12 md:w-10/12 lg:w-10/12 rounded-lg "
          alt="Developer"
        />
      </div>

      {/* About Content */}
      <div className="w-10/12 md:w-10/12 lg:w-10/12 mx-auto mb-8 text-gray-800">
        <p className="text-lg md:text-xl leading-relaxed text-justify">
          Hey there! I’m Tonmoy, a passionate WordPress web designer with a
          flair for crafting beautiful and functional websites. With a solid
          foundation in HTML and CSS, I blend creativity with technical
          expertise to bring your digital vision to life.
          <br />
          <br />
          From sleek portfolios to dynamic e-commerce platforms, I specialize in
          creating bespoke WordPress solutions tailored to your unique needs.
          Whether you’re a small business looking to establish your online
          presence or a seasoned entrepreneur aiming to revamp your website, I’m
          here to collaborate with you every step of the way. My goal? To design
          not just websites, but digital experiences that captivate, engage, and
          inspire action.
          <br />
          <br />
          With a keen eye for detail and a commitment to excellence, I strive to
          exceed your expectations and deliver results that make an impact.
          Ready to elevate your online presence? Let’s connect and transform
          your ideas into stunning reality!
        </p>
      </div>
    </div>
  );
};

export default About;
