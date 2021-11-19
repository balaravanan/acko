import React, { useState } from 'react'
import { CModal, CModalHeader, CModalTitle, CAccordion,
    CAccordionBody,
    CAccordionHeader,
    CAccordionItem, CModalBody} from '@coreui/react'
import "./Responsive.css"

function Responsive() {
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <div className="first">
            <svg width="63" height="20" viewBox="0 0 63 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="63" height="20">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H62.5V20H0L0 0Z" fill="white"></path>
  </mask>
  <g mask="url(#mask0)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M52.5014 -0.00012207H9.99866C4.47639 -0.00012207 0 4.50311 0 10.0582C0 15.6133 4.36015 20.0002 9.88241 20.0002H52.3852C57.9071 20.0002 62.5 15.6133 62.5 10.0582C62.5 4.50311 58.0237 -0.00012207 52.5014 -0.00012207Z" fill="#7C47E1"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M52.1117 17.5277C48.0028 17.5277 44.6602 14.165 44.6602 10.0314C44.6602 5.89785 48.0028 2.53516 52.1117 2.53516C56.2204 2.53516 59.5633 5.89785 59.5633 10.0314C59.5633 14.165 56.2204 17.5277 52.1117 17.5277Z" fill="white"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M52.1103 15.1439C49.3033 15.1439 47.028 12.8546 47.028 10.0311C47.028 7.20719 49.3033 4.91821 52.1103 4.91821C54.917 4.91821 57.1927 7.20719 57.1927 10.0311C57.1927 12.8546 54.917 15.1439 52.1103 15.1439Z" fill="#44CB86"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3785 15.1144C7.59197 15.1144 5.3254 12.834 5.3254 10.0311C5.3254 7.22785 7.59197 4.94738 10.3785 4.94738C13.1647 4.94738 15.4315 7.22785 15.4315 10.0311C15.4315 12.834 13.1647 15.1144 10.3785 15.1144ZM17.8225 10.0311C17.8225 5.90177 14.4832 2.54211 10.3785 2.54211C6.27374 2.54211 2.93442 5.90177 2.93442 10.0311C2.93442 14.1601 6.27374 17.5198 10.3785 17.5198C12.3274 17.5198 14.103 16.7623 15.4315 15.5248V16.3173C15.4315 16.9813 15.9669 17.5198 16.6272 17.5198C17.2872 17.5198 17.8225 16.9813 17.8225 16.3173V10.2714C17.8225 10.2477 17.8216 10.2252 17.8204 10.2039C17.8216 10.1465 17.8225 10.0888 17.8225 10.0311Z" fill="white"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.879 17.5272C22.7459 17.5272 19.383 14.1441 19.383 9.98624C19.383 5.82775 22.7459 2.44531 26.879 2.44531C28.7325 2.44531 30.5121 3.13115 31.8892 4.37679C32.3831 4.82359 32.4236 5.5884 31.9798 6.08532C31.5356 6.58254 30.7751 6.62294 30.2814 6.17614C29.346 5.33053 28.1377 4.8649 26.879 4.8649C24.0719 4.8649 21.7882 7.16207 21.7882 9.98624C21.7882 12.8101 24.0719 15.1076 26.879 15.1076C28.1386 15.1076 29.3475 14.6413 30.2829 13.7945C30.7766 13.3474 31.5371 13.3878 31.9813 13.8844C32.4257 14.381 32.3855 15.1459 31.8922 15.593C30.5142 16.8401 28.734 17.5272 26.879 17.5272Z" fill="white"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M44.762 15.3304L38.311 9.88587L44.762 4.55403C45.2705 4.13032 45.3408 3.37219 44.9193 2.86069C44.4978 2.3495 43.7439 2.27873 43.2358 2.70275L36.2464 8.53332V3.62854C36.2464 2.96426 35.7111 2.42604 35.0508 2.42604C34.3908 2.42604 33.8555 2.96426 33.8555 3.62854V16.2559C33.8555 16.9202 34.3908 17.4587 35.0508 17.4587C35.7111 17.4587 36.2464 16.9202 36.2464 16.2559V11.3511L43.2358 17.1817C43.4592 17.3679 43.7294 17.4587 43.9985 17.4587C44.3417 17.4587 44.6829 17.3105 44.9193 17.0237C45.3408 16.5125 45.2705 15.7544 44.762 15.3304Z" fill="white"></path>
  </g>
  </svg>
            </div>

            <div className="menu">
               <div>
                   <span className="hOtAqa">
                   <span style={{fontSize:"30px",cursor:"pointer"}} onClick={() => setVisible(!visible)}>&#9776; </span>

                   </span>
               </div>
                
</div>

<CModal visible={visible} onClose={() => setVisible(false)} style={{marginLeft:"4.2em"}}>
      <CModalHeader onClose={() => setVisible(false)}  className="titlemod">
        <CModalTitle>
            <div>
                <div className={'manage'}>
                Manage your policy
                </div>
                <button className="login">login</button>
            </div>

        </CModalTitle>
      </CModalHeader>
      <CModalBody>
      <div>
        <div>
        <img height="26px" width="26px" src="https://myaccount.ackoassets.com/static/images/header-icons/raise-a-claim-v2.svg" className="sc-gAmQfK jqNPIq"/>
        Raise a claim
        </div>
        <div>
        <img height="26px" width="26px" src="https://myaccount.ackoassets.com/static/images/header-icons/renew-policy-v2.svg" className="sc-gAmQfK jqNPIq"/>
        Renew policy
        </div>
        <div>
        <img height="26px" width="26px" src="https://myaccount.ackoassets.com/static/images/header-icons/help-icon-v2.svg" className="sc-gAmQfK jqNPIq"/>
        Help
        </div>
        </div>
            <br /><br />
        <div>
            <div className={'giri'}>
                <div className="paraiir" style={{paddingTop:"30px"}}>Have a partner issued policy?</div>
            </div>
            <div className="TmMsR">
                <p className="fIzbua">
                Claim
                </p>
            </div>
            <div className="hiriimg">
            <img alt="partners" height="74px" width="76px" src="https://myaccount.ackoassets.com/static/images/header-icons/partner-group-logo.svg" className="sc-gAmQfK daUfMO"/>
            </div>
        </div>
        <br /><br />

        <div className="laOZvl">
            <div className="khGBsD">
            Products
            </div>
            <div>
            <CAccordion flush>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>
           <div className="jsDehE"> 
           <img height="26px" width="26px" src="https://myaccount.ackoassets.com/static/images/header-icons/car-hamburger-new-v2.svg" alt="product" className="sc-bJHhxl kVbLrd"/>
           Car & taxi</div>
            </CAccordionHeader>
          <CAccordionBody>
            <ul className="sc-bJTOcE jfGmYb">
              <li className="sc-PLyBE hNrZVc">
               <p
                  
                  className="sc-dPNhBE drGShU"
                >
                  Comprehensive Car Insurance
               </p>
              </li>
              <li className="sc-PLyBE hNrZVc">
               <p
              
                  className="sc-dPNhBE drGShU"
                >
                 Third Party Car Insurance
               </p>
              </li>
              <li className="sc-PLyBE hNrZVc">
               <p
                 
                  className="sc-dPNhBE drGShU"
                >
                  Commercial Car Insurance
               </p>
              </li>
            </ul>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader>  <div className="jsDehE"> 
          <img height="26px" width="26px" src="https://myaccount.ackoassets.com/static/images/header-icons/bike-hamburger-new-v2.svg" alt="product" className="sc-bJHhxl kVbLrd"/>
          Bike
          </div></CAccordionHeader>
          <CAccordionBody>
          <ul className="sc-bJTOcE jfGmYb">
              <li className="sc-PLyBE hNrZVc">
               <p
                  
                  className="sc-dPNhBE drGShU"
                >
                  Comprehensive Bike Insurance
               </p>
              </li>
              <li className="sc-PLyBE hNrZVc">
               <p
              
                  className="sc-dPNhBE drGShU"
                >
                Third Party Bike Insurance
               </p>
              </li>
            </ul>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={3}>
          <CAccordionHeader>  <div className="jsDehE"> 
          <img height="26px" width="26px" src="https://myaccount.ackoassets.com/static/images/header-icons/health-hamburger-new-v2.svg" alt="product" className="sc-bJHhxl kVbLrd"/>
          Health</div></CAccordionHeader>
          <CAccordionBody>
          <ul className="sc-bJTOcE jfGmYb">
              <li className="sc-PLyBE hNrZVc">
               <p
                  
                  className="sc-dPNhBE drGShU"
                >
                 Health Insurance
               </p>
              </li>
              <li className="sc-PLyBE hNrZVc">
               <p
              
                  className="sc-dPNhBE drGShU"
                >
                Arogya Sanjeevani

               </p>
              </li>
              <li className="sc-PLyBE hNrZVc">
               <p
              
                  className="sc-dPNhBE drGShU"
                >
                Group Medical Cover
               </p>
              </li>
            </ul>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={4}>
          <CAccordionHeader>  <div className="jsDehE"> 
          <img height="26px" width="26px" src="https://myaccount.ackoassets.com/static/images/header-icons/electronics-hamburger-new-v2.svg" alt="product" className="sc-bJHhxl kVbLrd"/>Electronics</div></CAccordionHeader>
          <CAccordionBody>
          <ul className="sc-bJTOcE jfGmYb">
              <li className="sc-PLyBE hNrZVc">
               <p
                  
                  className="sc-dPNhBE drGShU"
                >
                Mobile Protection
               </p>
              </li>
              <li className="sc-PLyBE hNrZVc">
               <p
              
                  className="sc-dPNhBE drGShU"
                >
               Appliance Protection

               </p>
              </li>
            </ul>
          </CAccordionBody>
        </CAccordionItem>
        </CAccordion>
            </div>
        </div>

        <div>
<div className="laOZvl">
<p className="bBbmeJ">
Know your Insurance
</p>
</div>

<div className="dgjJYt">
<img height="26px" width="26px" src="https://myaccount.ackoassets.com/static/images/all-resources-v2.svg" alt="resource" className="sc-gAmQfK jqNPIq"/>
All Resources
</div>
<div className="dgjJYt">
<img height="26px" width="26px" src="https://myaccount.ackoassets.com/static/images/articles-v2.svg" alt="resource" className="sc-gAmQfK jqNPIq"/>
Articles
</div>
<div className="dgjJYt">
<img height="26px" width="26px" src="https://myaccount.ackoassets.com/static/images/guides-v2.svg" alt="resource" className="sc-gAmQfK jqNPIq"/>Guides
</div>
        </div>

        <div>
            
            <p className="jUGXNt">Trade logo displayed above belongs to ACKO Technology & Services Pvt Ltd and used by ACKO General insurance Limited under License.
            <br /><br />
           For more details on risk factors, terms, conditions and exclusions, please read the policy wordings carefully before concluding a sale.</p>
        </div>
      </CModalBody>
    </CModal>

        </div>
    )
}

export default Responsive
