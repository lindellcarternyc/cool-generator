import { SettingsProvider } from './context/SettingsContext'

import Controls from './components/Controls/Controls'
import AddColor from './components/AddColor/AddColor'
import Output from './components/Output/Output'
import Angle from './components/Sliders/AngleSlider'
import Speed from './components/Sliders/SpeedSlider'
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground'

const App = () => {
  return (
    <SettingsProvider>
      <AnimatedBackground>
        <main style={{
          textAlign: 'center',
          padding: '64px'
        }}>
          <h1>Animated CSS Gradient Background Generator</h1>
          <Controls />
          <AddColor />
          <Angle />
          <Speed />
          <Output />
        </main>
      </AnimatedBackground>
    </SettingsProvider>
  )
}

export default App