import { useContext } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import Slider from './Slider'

const Speed = () => {
  const { speed, setSpeed } = useContext(SettingsContext)

  return (
    <Slider 
      id='speed'
      label='Speed'
      min={1}
      max={10}
      value={speed}
      onChange={setSpeed}
      display={curSpeed => `${curSpeed}`}
    />
  )
}

export default Speed