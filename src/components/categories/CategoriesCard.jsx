import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function CategoriesCard({ imgUrl, categoryName }) {
  return (
    <Link to={`/categories/${categoryName}`}>
      <Card className="mt-6 flex flex-col border w-full md:w-96 lg:w-96 justify-center  p-3 cursor-pointer rounded  hover:shadow-xl  hover:opacity-80">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={imgUrl} alt="category-card-thumbnail" />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-center"
          >
            {categoryName}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
}
export default React.memo(CategoriesCard);
