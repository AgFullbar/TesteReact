
import './style.css'

export default function Filter({name, placeholder}){

    
    return(
        <div className="filterItem">
          <label htmlFor="email-filter" className="label">
            {name}
          </label>
          <input
            type="text"
            id="email-filter"
            placeholder={placeholder}
            className="input"
          />
        </div>
    )
}