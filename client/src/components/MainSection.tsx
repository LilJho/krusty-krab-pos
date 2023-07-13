import OrderSection from "./OrderSection";

const MainSection = () => {
  return (
    <main className="w-full h-[88vh] md:h-[85.9vh] flex flex-col justify-center items-center mt-8">
      <h1 className="text-xl font-bold text-center md:text-2xl">
        Welcome to the Krusty-Krab! <br /> May I take your Order?!
      </h1>
      <div className="relative flex m-2">
        <OrderSection />
        <img
          src="./spongebob.png"
          alt="Spongebob"
          className="w-[35rem] hidden xl:block absolute bottom-0 right-[-300px] z-0"
        />
      </div>
    </main>
  );
};

export default MainSection;
