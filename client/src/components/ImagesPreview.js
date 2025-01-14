import React from "react";

const ImagesPreview = ({ url, heading }) => {
  return (
    <div>
      {url && (
        <div>
          <h1 className="my-2 text-gray-400 capitalize">{heading}</h1>
          <div className="preview-image">
            <img
              src={url}
              alt="image"
              className="w-full h-full object-cover"
            ></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagesPreview;
