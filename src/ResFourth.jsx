import React from 'react'
import money from "../src/assesets/money.svg"
import money1 from "../src/assesets/money1.svg"
import coin from "../src/assesets/coin.svg"

function ResFourth() {
    return (
        <div>
            <div>
                <p className="fgMdxG">Here’s why you’ll love ACKO</p>
            </div>

            <div className={'money'}>
                <img src={money} alt="" />
            </div>

            <div>
                <p className="hscuqT">
                Incredibly low premiums
                </p>
            </div>

            <div>
                <p className="BBeZN">
                Insuring things that matter to you shouldn’t come at a cost. That’s why when you buy from us, you get insurance that fits your pocket.
                </p>
            </div>


            <div className={'money'}>
                <img src={money1} alt="" />
            </div>

            <div>
                <p className="hscuqT">
                Superquick and easy
                </p>
            </div>

            <div>
                <p className="BBeZN">
                We’re easy, effortless and 100% digital. Forget paperwork, just access all our services with just a few clicks.                </p>
            </div>

            <div className={'money'}>
            <img src={coin} alt="" />
            </div>

            <div>
                <p className="hscuqT">
             Hassle-free claims
                </p>
            </div>

            <div>
                <p className="BBeZN">
                We’re on a mission to make insurance claims stress-free. Just give us a call or file a claim online and experience cashless, speedy claim settlements.            
                </p>
                </div>
        </div>
    )
}

export default ResFourth
