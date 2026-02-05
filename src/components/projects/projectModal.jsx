import "./styles/projectModal.css";

const ProjectModal = ({selected, setSelected}) => {
    
    return (
        <div
            className="modal-overlay"
            onClick={() => setSelected(null)}
        >
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <span
                    className="modal-close"
                    onClick={() => setSelected(null)}
                >
                    &times;
                </span>
                <h3>{selected.title}</h3>
                <div>{selected.body}</div>
            </div>
        </div>
	);
};

export default ProjectModal;
