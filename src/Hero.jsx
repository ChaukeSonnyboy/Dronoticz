import { jumpToSubscribe } from './SubscribeRef'

function Hero() {
    return (
        <>
            <section className="heroPage">


                <div className="heroHeader">  {/* Container of the Navigation bar */}
                    <div className='logo'>D<span>Z</span></div>
                    <div className="links">
                        <a href="#aboutus">ABOUT</a>
                        <a href="#dronesArtcles">ARTICLES</a>
                    </div>

                    <div><button type='button' onClick={jumpToSubscribe} >SUBSCRIBE</button></div>
                </div>

                <div className="heroTittle">   {/* Container of the tittles*/}

                    DRONOTICZ
                    <p>THE ERA OF DRONES</p>
                    <hr />
                </div>

            </section>
        </>
    )
}

export default Hero;