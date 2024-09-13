
import { useState } from 'react'
import './style.css'

export default function Filter({name, placeholder, value, onChange}){
   
    return(
        <div className="filterItem">
          <label htmlFor="email-filter" className="label">
            {name}
          </label>
          <input
            type="text"
            id="email-filter"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="input"
          />
        </div>
    )
}