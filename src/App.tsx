import { SettingsProvider } from './context/SettingsContext'

import Controls from './components/Controls/Controls'
import AddColor from './components/AddColor/AddColor'
import Output from './components/Output/Output'

const App = () => {
  return (
    <SettingsProvider>
      <main style={{
        textAlign: 'center',
        padding: '64px'
      }}>
        <h1>Animated CSS Gradient Background Generator</h1>
        <Controls />
        <AddColor />
        <Output />
      </main>
    </SettingsProvider>
  )
}

export default App