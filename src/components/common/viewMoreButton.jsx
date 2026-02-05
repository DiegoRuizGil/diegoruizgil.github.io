import "./styles/viewMoreButton.css";
import { Link } from "react-router-dom";


const ViewMoreButton = ({ section }) => {
  return (
    <div className="content-divider-container">
      <div className="content-divider-wrapper">
        <Link 
          to={section}
          type="button"
          className="load-more-button"
        >
          <p className="text-info">View more</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="load-more-button-icon"
          >
 
            <path
              fillRule="evenodd"
              d="M8.28 7.72a.75.75 0 000 1.06L10.69 12l-2.41 2.22a.75.75 0 101.06 1.06l2.94-2.72a.75.75 0 000-1.06L9.34 7.72a.75.75 0 00-1.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ViewMoreButton;