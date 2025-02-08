import { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import { Spin } from "antd";
const CategoriesList = () => {
  const [categoriesData, setCategories] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  const { categories } = categoriesData;

  return (
    <div className="h-full w-full  flex  justify-center items-center mt-6">
      {loading ? (
        <div className="h-full mt-52  flex items-center justify-center">
          <Spin />
        </div>
      ) : (
        <section className="h-full grid sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 ">
          {categories?.map((categoryObj) => (
            <CategoriesCard
              imgUrl={categoryObj?.strCategoryThumb}
              categoryName={categoryObj?.strCategory}
              categoryDesciption={categoryObj?.strCategoryDescription}
              key={categoryObj?.idCategory}
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default CategoriesList;
