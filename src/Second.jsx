import React from 'react'
import star from "../src/assesets/download.svg"
import download from "../src/assesets/1download.png"
import downloa from "../src/assesets/downloa.png"
import downl from "../src/assesets/downl.png"

function Second() {
    return (
        <div className='secon'>
            <React.Fragment>
              
<div className="row">
    
  <div className="column" style={{paddingLeft:"230px"}}>
                <div className="star">
                    <img src={star} alt="star"/>
                </div>
                <div>
                    <p className="fLeYps">Very good experience. Got the settlement done in less than 24 hours.</p>
                </div>
                <div>
                    <div>
                        <img src={download} alt="download" className="foKTpZ"/>
                    </div>
                    <div className="jwbdFp">
                        <p className="ghYKa">Rahul Gupta</p>
                        <p className="hwqgIQ">Delhi</p>
                    </div>
                </div>
                </div>


                <div className="column">
                <div className="star">
                    <img src={star} alt="star"/>
                </div>
                <div>
                    <p className="fLeYps">Thank you so much for the amazing service, Special thanks to Mr. Rais Shaikh.</p>
                </div>
                <div>
                    <div>
                        <img src={downloa} alt="download" className="foKTpZ"/>
                    </div>
                    <div className="jwbdFp">
                        <p className="ghYKa">Somnath Mane</p>
                        <p className="hwqgIQ">Pune</p>
                    </div>
                </div>
                </div>

                <div className="column">
                <div className="star">
                    <img src={star} alt="star"/>
                </div>
                <div>
                    <p className="fLeYps">Hassle free insurance & quick response. Absolutely best insurance company ever</p>
                </div>
                <div>
                    <div>
                        <img src={downl} alt="download" className="foKTpZ"/>
                    </div>
                    <div className="jwbdFp">
                        <p className="ghYKa">Vinil Kumar</p>
                        <p className="hwqgIQ">Hyderabad</p>
                    </div>
                </div>
                </div>
</div>,,


            </React.Fragment>
        </div>
    )
}

export default Second 
