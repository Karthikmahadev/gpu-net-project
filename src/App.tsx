import './App.css'
import GPUDashboard from './components/GPUDashboard'
import { WalletProviderContext } from './components/WalletContext';

function App() {
  

  return (
    <><WalletProviderContext>
    <GPUDashboard /> </WalletProviderContext>
    </>
  )
}

export default App
