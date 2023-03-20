import "./detail.css";

const UploaderDeatils = ({
  imageIndex,
  modalSrc,
  currentSectionLength,
  caption,
  name,
  views,
  downloads,
  location,
  profileUrl
}) => (
  <aside>
    <div class="table-container" role="table" aria-label="Destinations">
      <div class="flex-table header" role="rowgroup">
        <div class="flex-row first" role="columnheader">
          <strong>Author</strong>
        </div>
        <div class="flex-row" role="columnheader">
          <strong> Caption</strong>
        </div>
        <div class="flex-row" role="columnheader">
          <strong> Views</strong>
        </div>
        <div class="flex-row" role="columnheader">
          <strong> Downloads</strong>
        </div>
        <div class="flex-row" role="columnheader">
          <strong> Location</strong>
        </div>
      </div>
      <div class="flex-table row" role="rowgroup">
        <div class="flex-row first" role="cell">
          <span class="flag-icon flag-icon-gb"></span>{" "}
          <a href={profileUrl} alt="" target="_blank">
            {name}
          </a>
        </div>
        <div class="flex-row" role="cell">
          {caption || "-"}
        </div>
        <div class="flex-row" role="cell">
          {views || "-"}
        </div>
        <div class="flex-row" role="cell">
          {downloads || "-"}
        </div>
        <div class="flex-row" role="cell">
          {location || "-"}
        </div>
      </div>
    </div>
  </aside>
);

export default UploaderDeatils;
