import { useState, useEffect, useCallback } from "react";

import "./styles.css";
import photos from "./photos";
import GalleryHome from "./common/GalleryHome";
import Slider from "./slider/Slider";
import Modal from "./modal/Modal";
import { buildAnSliderObj, crtHeapMap } from "./helper/utils";
import { PAGE_LIMIT } from "./helper/galleryConfig";

export default function App() {
  const [size] = useState("small");
  const [page, setPage] = useState(PAGE_LIMIT.startPage);
  const [photoList, setPhotoList] = useState();
  const [selected, setSelected] = useState(null);
  const [isModalShown, setModalVisibility] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = (e) => setModalVisibility(false);

  useEffect(() => {
    const newPhotos = crtHeapMap(photos, page);
    setPhotoList(newPhotos);
    //console.log(page);
    setHasMore(newPhotos.size > 0);
    setIsLoading(false);
  }, [page]);

  const loadMore = useCallback(() => {
    setPage((page) => page + 1);
    setIsLoading(true);
  }, []);

  const handlerNavigation = (modelObject = null, sliderMove = null) => {
    if (modelObject) setSelected(modelObject);
    if (sliderMove && photoList.get(sliderMove)) {
      const sliderObj = buildAnSliderObj(
        photoList.get(sliderMove),
        photoList.size,
        sliderMove
      );
      setSelected((prev) => ({ ...prev, ...sliderObj }));
    }
    setModalVisibility(true);
  };
  return (
    <div className="App">
      <h3 className="heading-text">Unsplash Gallery</h3>
      {isModalShown && (
        <Modal close={closeModal}>
          <Slider slider={selected} handlerNavigation={handlerNavigation} />
        </Modal>
      )}
      {photoList && (
        <GalleryHome
          photos={photoList}
          size={size}
          hasMore={hasMore}
          isLoading={isLoading}
          loadMore={loadMore}
          modelHandler={handlerNavigation}
        />
      )}
    </div>
  );
}
