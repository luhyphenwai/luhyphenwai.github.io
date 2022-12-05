import * as React from "react";
import { Blob } from "./IntroStyles";
const BlobComponent = (props) => (
  <Blob>
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="#FDD85D"
        d="M30.8,-40.2C44.1,-32.7,62.1,-29.4,62.7,-21.7C63.4,-14.1,46.8,-2.1,40.6,12C34.3,26.1,38.5,42.5,33.5,47.6C28.5,52.8,14.2,46.7,5.4,39.3C-3.5,31.9,-6.9,23.1,-15.4,19.1C-23.9,15.1,-37.5,15.8,-47.9,9.5C-58.2,3.2,-65.5,-10.2,-64,-22.6C-62.5,-35,-52.2,-46.4,-40.1,-54.2C-28,-62.1,-14,-66.5,-2.6,-62.8C8.7,-59.2,17.5,-47.7,30.8,-40.2Z"
        transform="translate(100 100)"
      />
    </svg>
  </Blob>
);

export default BlobComponent;
