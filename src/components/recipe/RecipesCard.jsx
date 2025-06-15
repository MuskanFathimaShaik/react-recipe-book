import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function RecipeCard({ imgUrl, recipeName }) {
  return (
    <a href={`/recipe/${recipeName}`}>
      <Card className="mt-6 h-96 border rounded overflow-hidden flex flex-col gap-6 hover:cursor-pointer hover:shadow-2xl hover:opacity-80">
        <CardHeader color="blue-gray" className="relative h-64">
          <img src={imgUrl} alt="recipe-thumbnail" />
        </CardHeader>
        <CardBody className="flex flex-col justify-center items-center">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-center"
          >
            {recipeName}
          </Typography>
        </CardBody>
      </Card>
    </a>
  );
}
export default React.memo(RecipeCard);
