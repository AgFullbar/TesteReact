import "./style.css"

const InputFilter = (prop) => {
    return (
        <>
            <div className="filterItem">
                <label htmlFor={prop.id} className="label">
                    {prop.children}:
                </label>
                <input
                    type="text"
                    id={prop.id}
                    placeholder={prop.placeholder}
                    value={prop.value}
                    onChange={prop.onChange}
                    className="input"

                />
            </div>
        </>
    )
};

export default InputFilter;