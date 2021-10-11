import {
  MdOutlineBookmarkAdd,
  FaHandMiddleFinger,
  FaRegCommentDots,
} from "../../assets/icon";
import "./styles.scss"
export const Reviews = () => {
  return (
    <div className="review">
      <FaHandMiddleFinger size={24} />
      <FaRegCommentDots size={24} />
      <MdOutlineBookmarkAdd size={24} />
    </div>
  );
};
