import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Mail, GitHub, Edit, Upload } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button, CardImg, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'

const Kyc1 = (props) => {
  const [img, setImg] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [optionSelected, setoptionSelected] = useState("Select Document")
  const [disabledUpload, setdisabledUpload] = useState(false)
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  // const RememberMe = () => {
  //   return (
  //     <Fragment>
  //       I agree to
  //       <a className='ml-25' href='/' onClick={e => e.preventDefault()}>
  //         privacy policy & terms
  //       </a>
  //     </Fragment>
  //   )
  // }
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }
  function uploadDocument() {
    const kyc = {
      documentName : optionSelected,
      documentUrl : img
    }
    fetch('http://127.0.0.1:5000/kyc', {
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
        'x-access-token' : `${localStorage.getItem('token')}`
      },
      body:JSON.stringify(kyc)
    }).then(resp => resp.json()).then(resp => { props.setstep("2") })
  }
  return (
    <div className='auth-wrapper auth-v1 px-2'>
      <div className='auth-inner py-2'>
        <Card className='mb-0'>
          <CardBody>
            <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
              <svg viewBox='0 0 139 95' version='1.1' height='28'>
                <defs>
                  <linearGradient x1='100%' y1='10.5120544%' x2='50%' y2='89.4879456%' id='linearGradient-1'>
                    <stop stopColor='#000000' offset='0%'></stop>
                    <stop stopColor='#FFFFFF' offset='100%'></stop>
                  </linearGradient>
                  <linearGradient x1='64.0437835%' y1='46.3276743%' x2='37.373316%' y2='100%' id='linearGradient-2'>
                    <stop stopColor='#EEEEEE' stopOpacity='0' offset='0%'></stop>
                    <stop stopColor='#FFFFFF' offset='100%'></stop>
                  </linearGradient>
                </defs>
                <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                  <g id='Artboard' transform='translate(-400.000000, -178.000000)'>
                    <g id='Group' transform='translate(400.000000, 178.000000)'>
                      <path
                        d='M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z'
                        id='Path'
                        className='text-primary'
                        style={{ fill: 'currentColor' }}
                      ></path>
                      <path
                        d='M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z'
                        id='Path'
                        fill='url(#linearGradient-1)'
                        opacity='0.2'
                      ></path>
                      <polygon
                        id='Path-2'
                        fill='#000000'
                        opacity='0.049999997'
                        points='69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325'
                      ></polygon>
                      <polygon
                        id='Path-2'
                        fill='#000000'
                        opacity='0.099999994'
                        points='69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338'
                      ></polygon>
                      <polygon
                        id='Path-3'
                        fill='url(#linearGradient-2)'
                        opacity='0.099999994'
                        points='101.428699 0 83.0667527 94.1480575 130.378721 47.0740288'
                      ></polygon>
                    </g>
                  </g>
                </g>
              </svg>
              <h2 className='brand-text text-primary ml-1'>Vuexy</h2>
            </Link>
            <CardTitle tag='h4' className='mb-1'>
              Identity Proof 🚀
            </CardTitle>
            <CardText className='mb-2'></CardText>
            <Form className='auth-register-form mt-2' onSubmit={e => e.preventDefault()}>
              <FormGroup>
                
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown} style={{width:"100%", marginBottom:"10px"}}>
                  <DropdownToggle onChange={(e, data) => console.log(data)} color='primary' outline caret>
                    {optionSelected}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={(e) => { setoptionSelected(e.target.outerText); setdisabledUpload(true) }} tag='a'>Aadhar Card</DropdownItem>
                    <DropdownItem onClick={(e) => { setoptionSelected(e.target.outerText); setdisabledUpload(true) }} tag='a'>
                      Passport
                    </DropdownItem>
                    <DropdownItem onClick={(e) => { setoptionSelected(e.target.outerText); setdisabledUpload(true) }} tag='a'>Option 3</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
               
                <Button.Ripple id='change-img' className={disabledUpload ? '' : 'disabled'} tag={Label} style={{width:"100%"}}  color='primary'>
                <span className='d-none d-sm-block'>Upload Document</span>
                <Input type='file' hidden id='change-img'  onChange={onChange} accept='image/*' />
                </Button.Ripple>
              </FormGroup>
              {/* <FormGroup>
                <Label className='form-label' for='register-email'>
                  Email
                </Label>
                <Input type='email' id='register-email' placeholder='john@example.com' />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-password'>
                  Password
                </Label>
                <InputPasswordToggle className='input-group-merge' id='register-password' />
              </FormGroup> */}
              {/* <FormGroup>
                <CustomInput
                  type='checkbox'
                  className='custom-control-Primary'
                  id='remember-me'
                  label={<RememberMe />}
                />
              </FormGroup> */}
              <CardImg bottom width="100%" src={img}  />
             
              <Button.Ripple color='primary' onClick = {() => { uploadDocument() }} className={disabledUpload ? '' : 'disabled'} block style={{marginTop:"10px"}}>
                Next
              </Button.Ripple>
              
            </Form>
            {/* <p className='text-center mt-2'>
              <span className='mr-25'>Already have an account?</span>
              <Link to='/pages/login-v1'>
                <span>Sign in instead</span>
              </Link>
            </p>
            <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div> */}
            {/* <div className='auth-footer-btn d-flex justify-content-center'>
              <Button.Ripple color='facebook'>
                <Facebook size={14} />
              </Button.Ripple>
              <Button.Ripple color='twitter'>
                <Twitter size={14} />
              </Button.Ripple>
              <Button.Ripple color='google'>
                <Mail size={14} />
              </Button.Ripple>
              <Button.Ripple className='mr-0' color='github'>
                <GitHub size={14} />
              </Button.Ripple>
            </div> */}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Kyc1
