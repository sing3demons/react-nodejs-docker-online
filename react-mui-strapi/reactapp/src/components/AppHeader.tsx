import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import { Logout, Settings, Menu as MenuIcon } from '@mui/icons-material'
import { useProSidebar } from 'react-pro-sidebar'

const styles = {
    appBar: {
        bgcolor: 'teal',
    },
    appLogo: {
        width: 40,
        borderRadius: 2,
        marginLeft: 2,
        cursor: 'pointer',
    },
}

const AppHeader = () => {
    const { collapseSidebar, toggleSidebar, broken } = useProSidebar()
  return (
    <AppBar position='static' sx={[styles.appBar]}>
      <Toolbar>
        <IconButton color='secondary' onClick={() => (broken ? toggleSidebar() : collapseSidebar())}>
          <MenuIcon />
        </IconButton>
        <Box component={'img'} sx={styles.appLogo} src={'/assets/logo_round.png'} />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color='secondary'>
          <Settings />
        </IconButton>{' '}
        <IconButton color='secondary'>
          <Logout />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader
