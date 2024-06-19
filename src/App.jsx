import './App.css'
import qrCode from "./assets/image-qr-code.png"

function App() {

  return (
    <>
      <div className="qr-component">
        <img className='qr-image' src={qrCode} alt="" />
        <div className="qr-description">
          <h3>Improve your front-end skills by building projects</h3>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div> 
      </div>
    </>
  )
}

export default App
