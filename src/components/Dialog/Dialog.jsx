import { Portal } from "react-portal";
import PropTypes from "prop-types";

const Dialog = ({title, active, setActive, children}) => {
  return (
    <div className="dialog">
      <button
        className="dialog-button"
        onClick={() => setActive(!active)}
      >
        {title}
      </button>
      {active && (
        <Portal>
          <div className="dialog-children">
            <b
              className="dialog-close-icon"
              onClick={() => setActive(false)}
            >
              X
            </b>
            {children}
          </div>
        </Portal>
      )}
    </div>
  );
};

Dialog.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
  setActive: PropTypes.func,
  children: PropTypes.node,
};

Dialog.defaultProps = {
  title: "Modal dialog",
  active: false,
  setActive: () => {},
  children: null,
};

export default Dialog;
