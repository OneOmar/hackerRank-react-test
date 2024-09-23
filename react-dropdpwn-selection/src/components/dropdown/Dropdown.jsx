import { useState } from 'react'
import './dropdown.css'

export const Dropdown = ({ labelText, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelect = (e) => {
    const value = e.target.value
    setSelectedOption(value)
    onChange(e) // Notify the parent component of the selection
  }

  return (
    <div className='elementSet'>
      <select
        data-testid='dropdown'
        value={selectedOption}
        onChange={handleSelect}
      >
        <option value={labelText} disabled>
          {labelText}
        </option>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
