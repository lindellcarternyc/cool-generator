import { CSSProperties } from 'react'

interface SliderProps {
  style?: CSSProperties
  id: string
  label: string
  min: number
  max: number
  value: number
  onChange(value: number): void
  display(value: number): string
}

const Slider = ({ style, id, label, min, max, value, onChange, display }: SliderProps) => {
  return (
    <div
      style={{
        fontSize: '18px',
        ...style
      }} 
    >
      <label 
        htmlFor={id}
        style={{
          display: 'inline-block',
          fontWeight: 'bold',
          width: '100px',
          textAlign: 'right'
        }}
      >{label}</label>
      <input 
        type='range'
        id={id}
        name={id}
        value={value}
        min={min}
        max={max}
        onChange={e => {
          onChange(parseInt(e.target.value))
        }}
        style={{
          margin: '0 16px',
          width: '180px',
          position: 'relative',
          top: '2px'
        }}
      />
      <span
        style={{
          fontSize: '14px',
          padding: '0 8px',
          position: 'relative',
          top: '-2px',
          width: '120px',
          display: 'inline-block'
        }}
      >{display(value)}</span>
    </div>
  )
}

export default Slider