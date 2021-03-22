import { Home, Circle, PlusCircle, CreditCard, Book, Briefcase, Radio, Package, Lock, Bell, Moon, LogOut, HardDrive} from 'react-feather'
import { NavLink } from 'react-router-dom'

export default [
  {
    id: 'home',
    title: 'DashBoard',
    icon: <Home size={20} />,
    badge: 'light-warning',
    navLink:"/",
    action: 'read',
    resource: 'ACL'
  },
  {
    id: 'createEscrow',
    title:'Create Escrow',
    icon : <PlusCircle size={20} />,
    navLink : '/create-escrow',
    action: 'read',
    resource: 'ACL'
  },
  {
    id: 'acceptEscrow',
    title:'Accept Escrow',
    icon : <PlusCircle size={20} />,
    navLink : '/acceptescrow',
    action: 'read',
    resource: 'ACL'
  },
  {
    id: 'mywallet',
    title:'My Wallet',
    icon : <Briefcase size={20} />,
    navLink : '/mywallet',
    action: 'read',
    resource: 'ACL'
  },
  {
    id: 'escrowWallet',
    title:'Escrow Wallet',
    icon : <Briefcase size={20} />,
    navLink : '/escrowwallet',
    action: 'read',
    resource: 'ACL'
  },
  {
    id: 'marketcap',
    title: 'Market Cap',
    icon: <Radio size={20} />,
    badge: 'light-warning',
    navLink:"/marketcap",
    action: 'read',
    resource: 'ACL'
  },
  {
    id: 'security',
    title:'Security',
    icon : <Lock size={20} />,
    navLink : '/accept-escrow',
    action: 'read',
    resource: 'ACL'
  },
  {
    id: 'notification',
    title:'Notifications',
    icon : <Bell size={20} />,
    navLink : '/accept-escrow',
    action: 'read',
    resource: 'ACL'
  },
  {
    id: 'myAccount',
    title:'My Account',
    icon : <HardDrive size={20} />,
    navLink : '/myaccount',
    action: 'read',
    resource: 'ACL'
  },
  {
    id: 'theme',
    title:'Theme',
    icon : <Moon size={20} />
    //click : () => localStorage.setItem("hii", "hey")
  },
  {
    id: 'logput',
    title:'LogOut',
    icon : <LogOut size={20} />
    //onclick : localStorage.removeItem("userData")  
  }
]
