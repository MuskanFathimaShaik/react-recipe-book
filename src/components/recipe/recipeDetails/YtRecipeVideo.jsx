import React from "react";

const RecipeYtVideo = ({ strYoutube }) => {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = strYoutube.match(regExp);
  const ytVideoId = match && match[7].length === 11 ? match[7] : "";

  return (
    <div className="w-full max-w-[760px] mx-auto aspect-video sm:h-[300px] md:w-[760px] md:h-[415px]">
      <iframe
        src={`https://www.youtube.com/embed/${ytVideoId}?si=JdEj4ZbsrHdTMFxw`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full rounded"
      ></iframe>
    </div>
  );
};

export default React.memo(RecipeYtVideo);
