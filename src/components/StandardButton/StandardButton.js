import './style.css'

const StandardButton = (props) => {
    return (
        <button className="StandardButton" onClick={props.onClick}>
            {props.children}
        </button>
    )
};

export default StandardButton;