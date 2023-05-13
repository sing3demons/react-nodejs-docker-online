import { Avatar, Box, Typography } from '@mui/material'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined'
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'
import { Link, NavLink } from 'react-router-dom'

const SideNav = () => {
  return (
    <Sidebar style={{ height: '100%', top: 'auto' }} breakPoint='md' backgroundColor={'white'}>
      <Box sx={styles.avatarContainer}>
        <Avatar sx={styles.avatar} alt='Masoud' src='/assets/sing.png' />
        <Typography variant='body2' sx={styles.yourChannel}>
          kumneung panthong
        </Typography>
        <Typography variant='body2'>Administrator</Typography>
      </Box>

      <Menu menuItemStyles={{}}>
        <MenuItem component={<NavLink to='/admin/dashboard' />} icon={<DashboardOutlinedIcon />}>
          <Typography variant='body2'>Dashboard</Typography>
        </MenuItem>
        <MenuItem component={<Link to='/admin/product' />} icon={<SourceOutlinedIcon />}>
          <Typography variant='body2'>Product </Typography>
        </MenuItem>
        <MenuItem component={<Link to='/admin/report' />} icon={<AnalyticsOutlinedIcon />}>
          <Typography variant='body2'>Report </Typography>
        </MenuItem>
        <MenuItem component={<Link to='/admin/setting' />} icon={<StyleOutlinedIcon />}>
          <Typography variant='body2'>Setting </Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}

const styles = {
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    my: 5,
  },
  avatar: {
    width: '40%',
    height: 'auto',
  },
  yourChannel: {
    mt: 1,
  },
}

export default SideNav
