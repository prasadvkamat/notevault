// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt } from '@fortawesome/free-regular-svg-icons';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

// const Footer = () => {
//     return (
//         <footer className="footer bg-dark text-light py-3">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-6">
//                         <p>&copy; 2023 Prasad Kamat. All rights reserved.</p>
//                     </div>
//                     <div className="col-md-6 text-md-end">
//                         <p className="mb-0">
//                             <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
//                             Country: India
//                         </p>
//                         <p>
//                             <FontAwesomeIcon icon={faEnvelope} className="me-1" />
//                             Email: prasad@example.com
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // For solid style icons
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'; // For regular style icons

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-3 ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; 2023 Prasad Kamat. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p className="mb-0">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
                            Country: India
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className="me-1" />
                            Email: prasad@example.com
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className="me-1" />
                            Alternate Email: prasad.alt@example.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

