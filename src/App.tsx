import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Main from './components/Main'

function App() {
  return (
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Main/>
      </LocalizationProvider>
  )
}

export default App;
