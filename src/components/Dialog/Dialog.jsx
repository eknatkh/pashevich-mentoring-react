import { Portal } from "react-portal";
import PropTypes from "prop-types";

const Dialog = ({title, onClose, children}) => {
  return (
    <div className="dialog">
        <Portal>
          <div className="dialog-children">
            <b className="dialog-close-icon" onClick={onClose}>
              X
            </b><br />
            {title}
            {children}
          </div>
        </Portal>
    </div>
  );
};

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

Dialog.defaultProps = {
  title: "Modal dialog title",
  onClose: () => {console.log("Modal closed")},
  children: null,
};

export default Dialog;
