import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const MyImage = (props) => (
  <div>
    <LazyLoadImage
      alt={props.alt}
      height={"100%"}
      src={props.src}
      width={"100%"}
    />
  </div>
);

export default MyImage;
