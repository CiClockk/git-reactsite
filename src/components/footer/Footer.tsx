export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_lefttside">
        <div className="footer_leftside--news">
          <h2>Newsletter</h2>
        </div>
        <div className="footer_leftside--email">
          <p>
            Email Address
            <img src="http://localhost:3000/pictures/payments/arrow.svg" alt="img29"/>
          </p>
        </div>
        <div className="footer_leftside--text">
          <p>Sign up to our newsletter for special things</p>
          <p>and recieve 10% off your next rent</p>
        </div>
        <div className="footer_leftside--company">
          <p>&copy; 2024 The RunWay</p>
        </div>
      </div>
      <div className="footer_rightside">
        <div className="footer_rightside--menu">
          <p>TERMS AND CONDITIONS</p>
          <p>CENCELLATION POLICY</p>
          <p>PRIVACY POLICY</p>
        </div>
        <div className="footer_rightside--payment">
          <img src="http://localhost:3000/pictures/payments/paypal.svg" alt="img30"/>
          <img src="http://localhost:3000/pictures/payments/mastercard.svg" alt="img31"/>
          <img src="http://localhost:3000/pictures/payments/visa.svg" alt="img32"/>
          <img src="http://localhost:3000/pictures/payments/nfc.svg" alt="img33"/>
        </div>
      </div>
    </footer>
  )
} 