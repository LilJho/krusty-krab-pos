import OrderSection from "./OrderSection";

const MainSection = () => {
  return (
    <main className="w-full h-[85.9vh] flex justify-center items-center">
      <div className="relative flex">
        <OrderSection />
        <img
          src="./spongebob.png"
          alt="Spongebob"
          className="w-[35rem] absolute bottom-0 right-[-300px]"
        />
      </div>
    </main>
  );
};

export default MainSection;
