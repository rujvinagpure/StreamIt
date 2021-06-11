import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div>
        <img 
        className="poster"
        src={poster?`${img_300}/${poster}`:unavailable}/>
    <b className="title">{title}</b>
    {/* <br/> */}
    <span className="sunTitle">
        {media_type=="tv" ? "TV Series" : "Movies"}
        <span className="sunTitle"> {date}</span>
    </span>
    </div>
  );
};

export default SingleContent;