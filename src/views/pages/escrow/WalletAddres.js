
import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Clipboard, Maximize, Maximize2, X, XCircle } from 'react-feather'
import QrReader from 'react-qr-reader'
import {Label, Input, Modal} from 'reactstrap'
import ModalHeader from 'reactstrap/lib/ModalHeader'

function WalletAddress(props) {
    const { walletAddress, setwalletAddress } = props
    const [scanQr, setscanQr] = useState(false)
    const handleScan = data => {
        if (data) {
          setwalletAddres(data)
          setscanQr(false)
        }
      }
     const  handleError = err => {
        console.error(err)
      }
    const handleModal = () => {
        setscanQr(false)
    }
    const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
    const ScanQr = () => {
        return (
            <Modal isOpen={scanQr} toggle={handleModal}>
                <ModalHeader className='mb-1' toggle={handleModal} close={CloseBtn} tag='div'></ModalHeader>
            <div style={{alignItems:"center"}}>
                <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
                />
            </div>
            </Modal>
        )
    }
    return (
        <div>
            <Label style={{fontSize:"16px"}}><b>{props.label ? props.label : "Wallet Address"}</b></Label>
            <div>
                <CopyToClipboard onCopy={() => console.log("hii")} text={walletAddress}> 
                    <div style={{display:"inline", width:"75%"}}><Input value={walletAddress} onChange={(e) => setwalletAddress(e.target.value)} type="text" style={{paddingTop:"25px", paddingBottom:"25px", display:"inline", width:"75%", fontSize:"23px"}} />
                    <Clipboard size={ window.screen.width < 900 ? 30 : 40}  style={{cursor:"pointer"}}/>
                    </div>
                </CopyToClipboard>
            <div onClick={() => setscanQr(true)} style={{cursor:"pointer", display:"inline", marginLeft:"10px"}}>
                <Maximize size={window.screen.width < 900 ? 30 : 40} />
            </div>
            {scanQr && <ScanQr />}
            </div>
        </div>
    )
}

export default WalletAddress
