import { PAGE_LIMIT } from "./galleryConfig";

const buildAnSliderObj = (item, size, index) => ({
  caption: item.alt_description,
  modalSrc: `url(${item.urls["full"]})`,
  imageIndex: index,
  currentSectionLength: size,
  name: item.user.name,
  views: item.views,
  downloads: item.downloads,
  location: item.user.name,
  profileUrl: item.user.portfolio_urls
});

const topN = (arr, n) => {
  if (n > arr.length) {
    return false;
  }
  return arr
    .slice()
    .sort((a, b) => {
      return b.duration - a.duration;
    })
    .slice(0, n);
};

const crtHeapMap = (photos, page) => {
  const trimedData = topN(photos, page * PAGE_LIMIT.limit);
  return new Map(trimedData.map((i, k) => [k, i]));
};

export { buildAnSliderObj, crtHeapMap };
