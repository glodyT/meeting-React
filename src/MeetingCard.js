import { useState } from "react";

const MeetingCard = ({meeting}) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    const imageStyles = {
        padding: "10px 20px",
        textAlign: "center",
        color: "goldenrod",
        background: "beige",
        width: "50px"
    };

    return (
        <div className="meeting-card">
            <img 
                src="purduepete.png" 
                style={imageStyles}
                alt="Purdue Pete"
            />
            <h2>{meeting.topic}</h2>
            <p>{meeting.dateTime}</p>
            <p>{meeting.location}</p>

            <button onClick={handleOpenModal}>Show Parking Info</button>

            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h4>Parking Information</h4>
                        <p>{meeting.parking}</p>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MeetingCard;