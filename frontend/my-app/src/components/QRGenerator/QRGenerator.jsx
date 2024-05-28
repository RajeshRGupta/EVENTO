import React from 'react'

import { QRCode } from 'react-qrcode-logo';
import imageUrl from '../midia/EventsImg/logo3.png'

const QRGenerator = (props) => {
    console.log("QR:----------------- ",props.message)
    return (
        <div style={{width:"fit-content"}}>
            <QRCode
                value={'http://localhost:3000/Evento/tecet-success/'+props.message}            // here you should keep the link/value(string) for which you are generation promocode
                size={100}              // the dimension of the QR code (number)
                logoImage={imageUrl}  // URL of the logo you want to use, make sure it is a dynamic url
                logoHeight={20}
                logoWidth={20}
                logoOpacity={.9}
                enableCORS={true}       // enabling CORS, this is the thing that will bypass that DOM check
                qrStyle="dots"          // type of qr code, wether you want dotted ones or the square ones
                eyeRadius={0}          // radius of the promocode eye
                id={"some random string"}
            />
        </div>
    )
}

export default QRGenerator