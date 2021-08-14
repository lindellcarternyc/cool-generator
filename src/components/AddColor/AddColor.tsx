import { useState, useContext } from 'react'
import { ChromePicker } from 'react-color'
import { SettingsContext } from '../../context/SettingsContext'

const AddColor = () => {
  const { colorSelection, setColorSelection } = useContext(SettingsContext)
  const [color, setColor] = useState('white')

  return (
    <>
      <div style={{
        display: 'inline-block',
        paddingBottom: '32px'
      }}>
        <ChromePicker 
          // header='Pick Colors'
          color={color}
          onChange={newColor => setColor(newColor.hex)}
        />
      </div>
      <div>
        <button
          onClick={() => {
            setColorSelection([...colorSelection, color])
          }}
          style={{
            background: "royalblue",
            color: "white",
            padding: "12px 16px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            lineHeight: 1,
          }}
        >+ Add Color</button>
      </div>
    </>
  )
}

export default AddColor