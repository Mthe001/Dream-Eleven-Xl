// CustomAlert.js
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import './CustomAlert.css'
const CustomAlert = ({ message, type, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(onClose, 300);
        }, 3000); // Show for 3 seconds
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        visible && (
            <div className={`alert ${type} fadeIn fixed  top-6 right-6 p-2 md:p-4 lg:p-5 shadow-md rounded-lg flex items-center space-x-4`}>
                <span>{message}</span>
                <button onClick={onClose} className="ml-4 text-white font-semibold bg-transparent">✕</button>
                <div className="progress-bar"></div>
            </div>
        )
    );
};

CustomAlert.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["success", "error"]).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CustomAlert;
