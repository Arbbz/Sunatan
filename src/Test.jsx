import Countdown from "./components/Countdown";

const Test = () => {
  return (
    <div className="container mx-auto px-4 max-w-lg ">
      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('bg1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center px-3">
          <div className="relative inline-block mt-6 animate-scale-in">
            <img
              src="Foto1.jpeg"
              className="w-64 h-64 rounded-full object-cover mx-auto mb-4 shadow-lg  border-4 border-gold-500"
            />
            <div className="relative z-10">
              <h3 className="">Wedding Invitation</h3>
              <h2 className="text-5xl md:text-5xl font-playfair font-bold text-maroon-600 leading-tight header-content">
                Nadya & Febri
              </h2>
            </div>
          </div>
          <Countdown />
        </div>
      </div>

      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('bg1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-4xl font-bold">The Second slide</h2>
        <p className="mt-2">Scroll Down for next slide</p>
      </div>

      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center "
        style={{
          backgroundImage: "url('bg1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-4xl font-bold">The Third slide</h2>
        <p className="mt-2">Scroll Down</p>
      </div>

      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center "
        style={{
          backgroundImage: "url('bg1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-4xl font-bold">The Fourth slide</h2>
      </div>
    </div>
  );
};

export default Test;
