// ** React Imports
import { Fragment } from 'react'
import { Button } from 'reactstrap'
// ** Custom Components
import NavbarUser from './NavbarUser'
import NavbarBookmarks from './NavbarBookmarks'
import { Link } from 'react-router-dom'


const ThemeNavbar = props => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props

  return (
    <Fragment>
      <div className='bookmark-wrapper d-flex align-items-center'>
        {/* Ressponsive ness Is remaining */}
      {/* { <Link to="/create-escrow"><Button.Ripple color='primary'>Create EscroW</Button.Ripple></Link>}
      { <Button.Ripple style={{marginLeft:"10px"}} color='success'>Accept EscroW</Button.Ripple>} */}
        <NavbarBookmarks setMenuVisibility={setMenuVisibility} />
      </div>
      <NavbarUser skin={skin} setSkin={setSkin} />
    </Fragment>
  )
}

export default ThemeNavbar
