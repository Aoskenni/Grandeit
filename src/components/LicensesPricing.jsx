import React from "react";

const LicensesPricing = () => {
  return (
    <>
      <div className="licensing-pricing-container">
        <div className="licensing-pricing">
          <h2>LICENSING & PRICING</h2>
          <p>An array of Licensing and Pricing options to choose from</p>
        </div>
        <div className="licensing-lists">
          <div className="basic-license">
            <div>
              <h4>BASIC LICENSE</h4>
              <p>(LOW BUDGET)</p>
              <h2>$30</h2>
            </div>
            <div className="features-listing">
              <span>Recording</span>
              <span>Untagged MP3</span>
              <span>Sell Up to 2,500 Copies</span>
              <span>150,000 Online Streams</span>
              <span>1 Music Video</span>
              <span>Life Performances</span>
              <span>Radio Broadcast</span>
            </div><br />
            <a href="https://drive.google.com/file/d/1-KVljgmm74mdvFGGgt1D8ITKks80g7QU/view?usp=drive_link" target="_blank"><button id="featuresListingBtn">READ MORE</button></a>
          </div>
          <div className="premium-license">
          <div>
              <h4>PREMIUM LICENSE</h4>
              <p>(BUDGET)</p>
              <h2>$60</h2>
            </div>
            <div className="features-listing">
              <span>Recording</span>
              <span>WAV and MP3</span>
              <span>Sell Up to 5,000 Copies</span>
              <span>500,000 Online Streams</span>
              <span>1 Music Video</span>
              <span>Life Performances</span>
              <span>Radio Broadcast</span>
            </div><br /><br />
            <a href="https://drive.google.com/file/d/1-BRXwfDFaCJGoPQnO5KaZjyTPxnWIkGw/view?usp=drive_link" target="_blank"><button id="featuresListingBtn">READ MORE</button></a>
          </div>
          <div className="premium-plus-license">
          <div>
              <h4>PREMIUM PLUS LICENSE</h4>
              <p>(POPULAR)</p>
              <h2>$120</h2>
            </div>
            <div className="features-listing">
              <span>Recording</span>
              <span>WAV, MP3 and TRACK STEMS</span>
              <span>Sell Up to 10,000 Copies</span>
              <span>1,000,000 Online Streams</span>
              <span>2 Music Video</span>
              <span>Life Performances</span>
              <span>Radio Broadcast</span>
            </div><br /><br /><br />
            <a href="https://drive.google.com/file/d/1-CndclZmC_rZ5Xk3WxSlZYrhAY0DeYoi/view?usp=drive_link" target="_blank"><button id="featuresListingBtn">READ MORE</button></a>
          </div>
          <div className="unlimited-license">
          <div>
              <h4>UNLIMITED LICENSE</h4>
              <p>(BEST DEAL)</p>
              <h2>$200</h2>
            </div>
            <div className="features-listing">
              <span>Recording</span>
              <span>WAV, MP3 and TRACK STEMS</span>
              <span>Sell Unlimited Copies</span>
              <span>Unlimited Online Streams</span>
              <span>2 Music Video</span>
              <span>Life Performances</span>
              <span>Unlimited Radio Broadcast</span>
            </div><br /><br /><br /><br />
            <a href="https://drive.google.com/file/d/1-KIIXg7EXOeuxpP0AfOd4VaW9FsvRD8K/view?usp=drive_link" target="_blank"><button id="featuresListingBtn">READ MORE</button></a>
          </div>
          <div className="exclusive-license">
          <div>
              <h4>EXCLUSIVE LICENSE</h4>
              <p>(PRO)</p>
              <h2 className="p-line-through">$0.00</h2>
            </div>
            <div className="features-listing">
              <span>Recording</span>
              <span>Untagged MP3</span>
              <span>Sell Up to 2,500 Copies</span>
              <span>150,000 Online Streams</span>
              <span>1 Music Video</span>
              <span>Life Performances</span>
              <span>Radio Broadcast</span>
            </div><br /><br /> <br /> <br /><br />
            <a href="https://drive.google.com/file/d/1-JspifZyjZ-ceopHuTtY0jT9lxm9GXFH/view?usp=drive_link" target="_blank"><button id="featuresListingBtn">READ MORE</button></a>
          </div>
        </div>

        <div className="faq">
            <hr className="faq-hr" />
            <div className="faq-text-btn">
                <div className="faq-text">
                <h2>In Search of More Information?</h2>
                <p>Are you in need of more information regarding our <br />products and services, or in need of a 
                detailed guide on <br />how to purchase our digital products, click on the button.</p>
                </div>
                <button id="faqBtn">Proceed</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default LicensesPricing;
