
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './layouts/dashboard-layout.tsx'

import PageOne from './pages/page-one'
import PageTwo from './pages/page-two'

import { ERoute } from './constant.ts'
import { createTheme, ThemeProvider } from '@mui/material';

const App = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#A61D33',
        dark: '#8B1428',
      },
      secondary: {
        main: '#EDF7ED',
      },
      background: {
        default: '#f5f5f5',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<DashboardLayout />} >
          <Route index element={<PageOne />} />
          <Route path={ERoute.PAGE_ONE} element={<PageOne />} />
          <Route path={ERoute.PAGE_TWO} element={<PageTwo />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
