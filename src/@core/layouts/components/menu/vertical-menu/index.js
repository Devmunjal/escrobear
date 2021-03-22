// ** React Imports
import { Fragment, useState, useRef, useEffect } from 'react'

// ** Vertical Menu Items Array
import navigation from '@src/navigation/vertical'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { isUserLoggedIn } from '@utils'
// ** Vertical Menu Components
import VerticalMenuHeader from './VerticalMenuHeader'
import VerticalNavMenuItems from './VerticalNavMenuItems'
import Row from 'reactstrap/lib/Row'
import Avatar from '@components/avatar'
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import Col from 'reactstrap/lib/Col'
import { BarChart, Mail } from 'react-feather'
import Button from 'reactstrap/lib/Button'
import { Link } from 'react-router-dom'

const Sidebar = props => {
  // ** Props
  const { menuCollapsed, routerProps, menu, currentActiveItem, skin } = props

  // ** States
  const [groupOpen, setGroupOpen] = useState([])
  const [groupActive, setGroupActive] = useState([])
  const [activeItem, setActiveItem] = useState(null)

  // ** Menu Hover State
  const [menuHover, setMenuHover] = useState(false)

  // ** Ref
  const shadowRef = useRef(null)

  // ** Function to handle Mouse Enter
  const onMouseEnter = () => {
    if (menuCollapsed) {
      setMenuHover(true)
    }
  }
  const [userData, setUserData] = useState(null)

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])
  // ** Scroll Menu
  const scrollMenu = container => {
    if (shadowRef && container.scrollTop > 0) {
      if (!shadowRef.current.classList.contains('d-block')) {
        shadowRef.current.classList.add('d-block')
      }
    } else {
      if (shadowRef.current.classList.contains('d-block')) {
        shadowRef.current.classList.remove('d-block')
      }
    }
  }
  const userAvatar = (userData && userData.avatar) || defaultAvatar
  return (
    <Fragment>
      <div
        style={{boxShadow:"2px 0px 0px #f8f8f8, 0px 2px 0px #f8f8f8"}}
        className={classnames('main-menu menu-fixed menu-accordion menu-shadow', {
          expanded: menuHover || menuCollapsed === false,
          'menu-light': skin !== 'semi-dark' && skin !== 'dark',
          'menu-dark': skin === 'semi-dark' || skin === 'dark'
        })}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => setMenuHover(false)}
      >
        {menu ? (
          menu
        ) : (
          <Fragment>
            {/* Vertical Menu Header */}
            <VerticalMenuHeader setGroupOpen={setGroupOpen} menuHover={menuHover} {...props} />
            {/* Vertical Menu Header Shadow */}
            <Row style={{marginBottom:"10px", textAlign:"center"}}>
              <Col xl="12" md="12" xs="12" style={{marginTop:"20px"}}>
                <Avatar style={{display:"block", marginRight:"auto", marginLeft:"auto", background:"white"}} img={userAvatar} imgHeight='70' imgWidth='70'  />
              </Col>
              <Col xl="12" md="12" xs="12">
              <div style={{marginTop:"10px"}}>
                Name
              </div>
              <div>
                <span style={{marginRight:"5px"}}>
                  <Mail size={20} />
                </span>
                Email
              </div>
              <div >
                <span style={{marginRight:"5px"}}>
                  <BarChart size={20} />
                </span>
                Level
              </div>
              </Col>
            </Row>
            <Row style={{padding:"10px"}}>
              <Col xl="6" md="6" xs="6">
                <Link to="/create-escrow"><Button color="success">Create</Button></Link>
              </Col>
              <Col xl="6" md="6" xs="6">
                <Button color="primary">Accept</Button>
              </Col>
            </Row>
            <div className='shadow-bottom' ref={shadowRef}></div>
            {/* Perfect Scrollbar */}
            <PerfectScrollbar
              className='main-menu-content'
              options={{ wheelPropagation: false }}
              onScrollY={container => scrollMenu(container)}
            >
              <ul className='navigation navigation-main'>
                <VerticalNavMenuItems
                  items={navigation}
                  groupActive={groupActive}
                  setGroupActive={setGroupActive}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  groupOpen={groupOpen}
                  setGroupOpen={setGroupOpen}
                  routerProps={routerProps}
                  menuCollapsed={menuCollapsed}
                  menuHover={menuHover}
                  currentActiveItem={currentActiveItem}
                />
              </ul>
            </PerfectScrollbar>
          </Fragment>
        )}
      </div>
    </Fragment>
  )
}

export default Sidebar
