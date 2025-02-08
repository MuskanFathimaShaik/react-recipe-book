import React, { useState } from "react";
import { Button, Input, Modal } from "antd";

const SearchComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState({});
  const [loading, setLoading] = useState(false);

  const { Search } = Input;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setRecipes({});
  };

  const handleOnChange = (event) => {
    setSearchQuery(event.target.value);
  };

  React.useEffect(() => {
    if (searchQuery !== "") {
      setLoading(true);
      const timeOutId = setTimeout(() => {
        fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
        )
          .then((res) => res.json())
          .then((data) => {
            setRecipes(data);
            setSearchQuery("");
          })
          .catch(console.error)
          .finally(() => setLoading(false));
      }, 2000);
      return () => clearTimeout(timeOutId);
    }
  }, [searchQuery, recipes]);

  const handleRecipeClick = () => {
    setIsModalOpen(false);
    setRecipes({});
  };

  return (
    <>
      <Button
        onClick={showModal}
        className="p-0 border-none flex gap-1 items-center justify-center text-base font-medium">
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <i className="bx bx-search-alt"></i>
        <span> Recipes</span>
      </Button>
      <Modal
        title="Browse Recipes"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}>
        <Search
          onChange={handleOnChange}
          value={searchQuery}
          placeholder="Search by recipe name...."
          type="text"
          loading={loading}
          size="large"
        />
        <section className="mt-4 flex flex-col">
          {recipes?.meals === null ? (
            <div className="mx-auto text-lg text-blue-500">
              <h1>Oops! Recipe Not Found, Search Again</h1>
            </div>
          ) : (
            <>
              {recipes?.meals?.map((recipe, idx) => (
                <a
                  href={`/recipe/${recipe?.strMeal}`}
                  onClick={handleRecipeClick}>
                  <h1
                    className="text-lg border-b p-3 cursor-pointer hover:bg-gray-100 hover:border-blue-500"
                    key={idx}>
                    {recipe?.strMeal}
                  </h1>
                </a>
              ))}
            </>
          )}
        </section>
      </Modal>
    </>
  );
};
export default SearchComponent;
