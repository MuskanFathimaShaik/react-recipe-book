import React from "react";

const RecipeYtVideo = ({ strYoutube }) => {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = strYoutube.match(regExp);
  const ytVideoId = match && match[7].length === 11 ? match[7] : "";

  return (
    <iframe
      width="760"
      height="415"
      src={`https://www.youtube.com/embed/${ytVideoId}?si=JdEj4ZbsrHdTMFxw`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      className="rounded"></iframe>
  );
};

export default React.memo(RecipeYtVideo);
