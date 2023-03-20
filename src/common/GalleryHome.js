import React, { useEffect } from "react";
import useOnScreen from "../hooks/useOnScree";
import { buildAnSliderObj } from "../helper/utils";

const GalleryHome = ({
  photos,
  size,
  modelHandler,
  hasMore,
  isLoading,
  loadMore
}) => {
  const { measureRef, isIntersecting, observer } = useOnScreen();

  useEffect(() => {
    if (isIntersecting && hasMore) {
      loadMore();
      observer.disconnect();
    }
  }, [isIntersecting, hasMore, loadMore]);
  return (
    <div className="container">
      <div>
        <ul className="image-gallery">
          {[...photos.values()].map((p, index) => {
            if (index === photos.size - 1)
              return (
                <li
                  key={index}
                  onClick={() => {
                    const sliderData = buildAnSliderObj(p, photos.size, index);
                    return modelHandler(sliderData);
                  }}
                  ref={measureRef}
                >
                  <img src={p.urls[size]} alt={`Taken by ${p.user.name}`} />
                  <div className="overlay">
                    <span>{p.alt_description || "coming soon..."}</span>
                  </div>
                </li>
              );
            return (
              <li
                key={index}
                onClick={() => {
                  const sliderData = buildAnSliderObj(p, photos.size, index);
                  return modelHandler(sliderData);
                }}
              >
                <img src={p.urls[size]} alt={`Taken by ${p.user.name}`} />
                <div className="overlay">
                  <span>{p.alt_description || "coming soon..."}</span>
                </div>
              </li>
            );
          })}
          {isLoading && <li>Loading...</li>}
        </ul>
      </div>
    </div>
  );
};

export default GalleryHome;
