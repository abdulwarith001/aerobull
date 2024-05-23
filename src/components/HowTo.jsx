import React from 'react'
import Wrapper from '../assets/wrappers/HowTo'
import matamask_browser_icon from '../assets/images/matamask_browser_icon.png'

const HowTo = () => {
  return (
    <Wrapper>
      <div className="main-container">
        <h2>Steps to buy on mobile</h2>
        <div>
          <i>1.</i> <p>Copy the presale website link</p>
        </div>

        <div>
          <i>2.</i> <p>Open your Mobile Metamask application</p>
        </div>

        <div>
          <i>3.</i>
          <p>Click the Metamask browser icon</p>
        </div>
        <img src={matamask_browser_icon} alt="matamask browser icon" />

        <div>
          <i>4.</i>
          <p>
            Paste the presale website link <span className='link'>(
            <span>https://aerobull.netlify.app/presale</span>)
            </span>
          </p>
        </div>

        <div>
          <i>5.</i>
          <p>Click on "Connect wallet" on the website link</p>
        </div>
        <div>
          <i>6.</i>{" "}
          <p>
            After buying the ARB tokens, go to your wallet and click "Import
            tokens"
          </p>
        </div>

        <div>
          <i>7.</i>
          <p>Navigate to custom tokens</p>
        </div>

        <div>
          <i>8.</i>
          <p>Copy and paste our contract address and click "Next"</p>
        </div>

        <div>
          <i>9.</i>
          <p>Verify it is Aerobull (ARB) and click "Import"</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default HowTo