import React, { useState } from 'react'
import Popup from './Popup'
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WhatsappIcon,
    WorkplaceIcon
} from "react-share";

function Check2() {
    // const shareUrl = window.location.href;
    // console.log(shareUrl)
    const shareUrl="https://www.google.com/search?q=ncert+book"
    const[display,setdisplay]=useState(false);
    const [icon, seticon] = useState({
        "whatsapp": true,
        "facebook": false,
        "email": false,
        "pinterest": false,
        "linkedin": true,
        "hatenaicon": false,
        "instapaper": false,
        "lineshare": false,
        "livejournal": false,
        "mailru": false,
        "okshare": false,
        "pocketshare": false,
        "redditshare": false,
        "telegram": false,
        "tumblrshare": false,
        "twittericon": true,
        "vibershare": false,
        "vkshare": false,
        "workplace": false

    })
    const obj = [{
        "name": "facebook",
        "socialName": <FacebookShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
    },

    {
        "name": "email",
        "socialName": <EmailShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <EmailIcon size={32} round={true} />
        </EmailShareButton>
    },
    {
        "name": "pinterest",
        "socialName": <PinterestShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <PinterestIcon size={32} round={true} />
        </PinterestShareButton>
    },
    {
        "name": "linkedin",
        "socialName": <LinkedinShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
    },
    {
        "name": "hatenaicon",
        "socialName": <HatenaShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <HatenaIcon size={32} round={true} />
        </HatenaShareButton>
    },
    {
        "name": "instapaper",
        "socialName": <InstapaperShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <InstapaperIcon size={32} round={true} />
        </InstapaperShareButton>
    },
    {
        "name": "lineshare",
        "socialName": <LineShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <LineIcon size={32} round={true} />
        </LineShareButton>
    },
    {
        "name": "livejournal",
        "socialName": <LivejournalShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <LivejournalIcon size={32} round={true} />
        </LivejournalShareButton>
    },
    {
        "name": "mailru",
        "socialName": <MailruShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <MailruIcon size={32} round={true} />
        </MailruShareButton>
    },
    {
        "name": "okshare",
        "socialName": <OKShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <OKIcon size={32} round={true} />
        </OKShareButton>
    },
    {
        "name": "pocketshare",
        "socialName": <PocketShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <PocketIcon size={32} round={true} />
        </PocketShareButton>
    },
    {
        "name": "redditshare",
        "socialName": <RedditShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <RedditIcon size={32} round={true} />
        </RedditShareButton>
    },
    {
        "name": "telegram",
        "socialName": <TelegramShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <TelegramIcon size={32} round={true} />
        </TelegramShareButton>
    },
    {
        "name": "tumblrshare",
        "socialName": <TumblrShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <TumblrIcon size={32} round={true} />
        </TumblrShareButton>
    },
    {
        "name": "twittericon",
        "socialName": <TwitterShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
    },
    {
        "name": "vibershare",
        "socialName": <ViberShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <ViberIcon size={32} round={true} />
        </ViberShareButton>
    },
    {
        "name": "vkshare",
        "socialName": <VKShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <VKIcon size={32} round={true} />
        </VKShareButton>
    },
    {
        "name": "whatsapp",
        "socialName": <WhatsappShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
    },
    {
        "name": "workplace",
        "socialName": <WorkplaceShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <WorkplaceIcon size={32} round={true} />
        </WorkplaceShareButton>
    },

    ]

    const [popupbutton, setpopupbutton] = useState(false)
    return (
        <div>
            <div style={{ position:"fixed",bottom:"29%",right:"45%",width: "fit-content", backgroundColor: "#e2e1ec", borderRadius: "30px", padding: "5px" }} >
                
            <WhatsappShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            
            <div style={{fontSize:"28px"}} onClick={()=>{setdisplay(!display)}}><i class="fa-solid fa-share-nodes"></i></div>

            </div>
           { 
                display===true?
           (<div style={{ display:"flex", flexDirection:"column",position:"fixed",bottom:"29%",right:"45%",width: "fit-content", backgroundColor: "#e2e1ec", borderRadius: "30px", padding: "5px" }}>
            {
                    obj.length !== 0 ?
                        obj.map((key) => {
                            if (icon[`${key.name}`] === true)
                                return (
                                    // <div style={{ border: "none", width: "fit-content", display: "inline-flex", borderRadius: "20px" }}>
                                        <div style={{marginBottom:"27%"}}>
                                            <div style={{ border: "none", backgroundColor: "transparent" }}>
                                                {key.socialName}
                                            </div>

                                        </div>
                                    // </div>
                                )
                        }) :
                        null
            }
             <div onClick={() => setpopupbutton(true)} style={{ height: "5vh", width: "5vh", borderRadius: "50%", marginTop: "-1vh" }}><i className="fa-solid fa-plus"></i></div>
             <div onClick={() =>setdisplay(!display)} style={{ height: "5vh", width: "5vh", borderRadius: "50%", marginTop: "-1vh" }}><i class="fa-solid fa-xmark"></i></div>
            
            </div>):null}

            <Popup trigger={popupbutton} setTrigger={setpopupbutton} addicon={seticon} icon={icon} />
        </div>
    )
}

export default Check2