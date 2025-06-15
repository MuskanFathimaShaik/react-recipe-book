import React from "react";

const RecipeInstructions = ({ replacedSteps }) => {
  return (
    <aside
      style={{ backgroundColor: "#00b4d8" }}
      className="rounded-lg h-[32rem] p-6 flex flex-col gap-4 right-aside-bar-ui overflow-y-auto
[&::-webkit-scrollbar]:w-2
[&::-webkit-scrollbar-track]:bg-white
[&::-webkit-scrollbar-thumb]:bg-gray-300
[&::-webkit-scrollbar-thumb]:rounded
dark:[&::-webkit-scrollbar-track]:bg-slate-100
dark:[&::-webkit-scrollbar-thumb]:bg-slate-300"
    >
      <h2 className="text-2xl">Instructions: </h2>
      {replacedSteps.map((step, index) => (
        <div key={index}>
          <p className="text-xl mb-2">Step {index + 1}:</p>
          <p className="text-lg">{step.trim()}</p>
        </div>
      ))}
    </aside>
  );
};

export default React.memo(RecipeInstructions);
