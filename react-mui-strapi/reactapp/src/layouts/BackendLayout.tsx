import { Box } from '@mui/material'
import AppHeader from '../components/AppHeader'
import { Outlet } from 'react-router-dom'
import SideNav from '../components/SideNave'

const BackendLayout = () => {
  return (
    <>
      <AppHeader />
      <Box sx={styles.container}>
        <SideNav />
        <Box component={'main'} sx={styles.mainSection}>
          <Outlet />
        </Box>
      </Box>
    </>
  )
}

const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
  },
  mainSection: { px: 4, width: '100%', height: '100%', overflow: 'auto' },
}

export default BackendLayout
