import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
        <Link to='/' style={{textDecoration:"none"}}>
            <span className='logo'>Lamaadmin</span>
        </Link>
        </div>
        <hr />
        <div className='center'>
            <ul>
                <p className='title'>MAIN</p>
                <Link to='/' style={{textDecoration:"none"}}>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                </Link>
                <p className='title'>LISTS</p>
                <Link to='/users' style={{textDecoration:"none"}}>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon'/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to='/products' style={{textDecoration:"none"}}>
                    <li>
                        <ProductionQuantityLimitsIcon className='icon'/>
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <LocalOfferIcon className='icon'/>
                    <span>Others</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className='title'>USEFUL</p>
                <li>
                    <QueryStatsIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className='title'>SERVICE</p>
                <li>
                    <DnsOutlinedIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <HelpCenterOutlinedIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className='title'>USER</p>
                <li>
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className='colorOption'></div>
            <div className='colorOption'></div>
        </div>
    </div>
  )
}

export default Sidebar