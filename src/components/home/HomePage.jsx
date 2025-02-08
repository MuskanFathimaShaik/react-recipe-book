import MostPopularMeals from "./MostPopularMealsList";
import TrendingMeals from "./TrendingMealsList";

const HomePage = () => {
  return (
    <div className=" flex flex-col">
      <section className="flex flex-col items-center overflow-hidden justify-center section-one-ui">
        <img
          src={`${process.env.PUBLIC_URL}/header-logo.jpg`}
          alt="header-img"
          style={{ backgroundSize: "cover" }}
          className="w-full h-64 relative"
        />
        <h1 className="absolute top-85  font-serif text-5xl text-center bg-white w-full opacity-60">
          Delicious Recipes
        </h1>
      </section>
      <section className="p-4 flex flex-col gap-4 section-two-ui">
        <h1 className="text-3xl text-slate-900">Most Popular</h1>
        <MostPopularMeals />
      </section>
      <section className="p-4 flex flex-col gap-4 section-three-ui">
        <h1 className="text-3xl text-slate-900">Trending</h1>
        <TrendingMeals />
      </section>
    </div>
  );
};

export default HomePage;
