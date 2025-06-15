import { Button } from "antd";
import React from "react";

const RecipeThumbnail = ({ strMealThumb, strSource }) => {
  return (
    <aside
      style={{
        backgroundImage: `url(${strMealThumb})`,
        backgroundSize: "cover",
      }}
      className="rounded-lg h-[25rem] sm:h-[28rem] md:h-[30rem] lg:h-[32rem] overflow-hidden left-aside-bar-ui"
    >
      <a
        target="_blank"
        rel="noreferrer"
        href={strSource}
        className="relative m-4 inline-block"
      >
        <Button className="font-medium bg-white">
          Visit Site
          <i className="bx bxs-right-top-arrow-circle absolute right-0 top-0"></i>
        </Button>
      </a>
    </aside>
  );
};

export default React.memo(RecipeThumbnail);
