import { useContext } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import Slider from './Slider'

const Angle = () => {
  const { angle, setAngle } = useContext(SettingsContext)
  return (
    <Slider 
      id='angle'
      label='Angle'
      min={0}
      max={360}
      value={angle}
      onChange={setAngle}
      display={curAngle => `${curAngle} degrees`}
      style={{
        padding: `32px 0`
      }}
    />
  )
}

export default Angle