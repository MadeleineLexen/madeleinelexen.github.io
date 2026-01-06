import { useNavigate } from "react-router-dom";
import "./styles/Breadcrumbs.css";

const Breadcrumbs = () => {
    const navigate = useNavigate();
    return (
        <nav className="breadcrumbs-container" aria-label="breadcrumb">
            <button
                onClick={() => navigate(-1)}
                className="breadcrumb"
                aria-label="Go back"
            >
                ⟵ Go back
            </button>
        </nav>
    );
};

export default Breadcrumbs;