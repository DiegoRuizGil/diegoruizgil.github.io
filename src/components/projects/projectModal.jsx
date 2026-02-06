import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/projectModal.css";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ProjectModal = ({selected, setSelected}) => {
    
    return (
        <div
            className="modal-overlay"
            onClick={() => setSelected(null)}
        >
            <div
                className="modal"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-close-wrapper">
                    <span
                        className="modal-close"
                        onClick={() => setSelected(null)}
                    >
                        &times;
                    </span>
                </div>
                <div className="modal-banner">
                    <img src={selected.banner} alt="banner" />
                </div>
                <div className="modal-content">
                    <div className="modal-title">{selected.title}</div>
                    <div className="modal-link">
                        <div className="modal-link-icon">
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                        <div className="modal-link-text">
                            <a
                                href={selected.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub page
                            </a>
                        </div>
                    </div>
                    <div className="modal-link">
                        <div className="modal-link-icon">
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                        <div className="modal-link-text">
                            <a
                                href={selected.itchio}
                                target="_blank"
                                rel="noreferrer"
                            >
                                itch.io page
                            </a>
                        </div>
                    </div>
                    <div>{selected.body}</div>
                </div>
            </div>
        </div>
	);
};

export default ProjectModal;
