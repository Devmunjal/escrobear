import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard/analytics',
    component: lazy(() => import('../../views/dashboard/analytics'))
  },
  {
    path: '/dashboard/excrobear',
    component: lazy(() => import('../../views/dashboard/excrobear')),
    exact: true,
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },
  {
    path: '/dashboard/ecommerce',
    component: lazy(() => import('../../views/dashboard/ecommerce')),
    exact: true,
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },
  {
    path: '/create-escrow',
    component:lazy(() => import('../../views/pages/escrow/CreateEscrow')),
    exact :true,
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },
  {
    path: '/mywallet',
    component:lazy(() => import('../../views/pages/wallet/MyWallet')),
    exact :true,
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },
  {
    path: '/escrowwallet',
    component:lazy(() => import('../../views/pages/wallet/EscrowWallet')),
    exact :true,
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },
  {
    path: '/escrowdescription/:string',
    component:lazy(() => import('../../views/pages/EscrowDescription/EscrowDescription')),
    exact :true,
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },
  {
    path: '/escrowdescription',
    component:lazy(() => import('../../views/pages/EscrowDescription/EscrowDescription')),
    exact :true,
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },
  {
    path: '/acceptescrow',
    component:lazy(() => import('../../views/pages/escrow/AcceptEscrow')),
    exact :true,
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },
  {
    path: '/marketcap',
    component:lazy(() => import('../../views/pages/escrow/MarketCap')),
    exact :true,
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },
  {
     path: '/myaccount',
    component:lazy(() => import('../../views/pages/escrow/MyAccount')),
    exact :true,
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  }

]

export default DashboardRoutes
