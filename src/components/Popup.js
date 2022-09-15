import React from 'react'
import './popup.css'

function Popup(props) {
    function iconIdentiy(e)
    {
        
        props.addicon({...props.icon,[`${e.target.value}`]:!props.icon[`${e.target.value}`]})
       
    }
    return (props.trigger) ?(
        <>
            <div>
                <div style={{marginLeft:"fit-content",height:"fit-content", width:"32vw",border:"1px solid black",borderRadius:"12px"}}>
                    <div>
                        <div style={{display:"flex",flexWrap:"wrap",padding:"8px", marginBottom:"10px"}}>
                            <button value="instapaper" onClick={(e)=>{iconIdentiy(e)}} className="btnIcon">instapaper <i className="fa-brands fa-instagram"/></button>
                            <button value="pinterest" onClick={(e)=>{iconIdentiy(e)}} className="btnIcon">Pinterest <i className="fa-brands fa-pinterest"></i></button>
                            <button value="google" onClick={(e)=>{iconIdentiy(e)}} className="btnIcon">Google <i className="fa-brands fa-google"></i></button>
                            <button value="gmail" onClick={(e)=>{iconIdentiy(e)}} className="btnIcon">Gmail <i className="fa-brands fa-google-plus-g"></i></button>
                            <button value="whatsapp" onClick={(e)=>{iconIdentiy(e)}} className="btnIcon">whatsapp <i className="fa-brands fa-whatsapp"></i></button>
                            <button value="linkedin" onClick={(e)=>{iconIdentiy(e)}} className="btnIcon">linkedin <i className="fa-brands fa-linkedin"></i></button>
                            <button value="hatenaicon" onClick={(e)=>{iconIdentiy(e)}} className="btnIcon">hatenaicon <i className="fa-solid fa-b"></i></button>
                            <button value="lineshare" onClick={(e)=>{iconIdentiy(e)}} className="btnIcon">lineshare <i className="fa-brands fa-slideshare"></i></button>
                            <button value="livejournal" onClick={(e)=>{iconIdentiy(e)}} className="btnIcon">livejournal <i className="fa-solid fa-olive"></i></button>
                            <button value="mailru" onClick={(e)=>{iconIdentiy(e)}} className="btnIcon">mailru <i className="fa-solid fa-mailbox"/></button>
                            <button value="okshare" onClick={(e)=>{iconIdentiy(e)}} className="btnIcon">okshare <i className="fa-solid fa-share"></i></button>
                            <button value="redditshare" onClick={(e)=>{iconIdentiy(e)}} className="btnIcon">redditshare <i className="fa-brands fa-reddit"></i></button>
                            <button value="telegramicon" onClick={(e)=>{iconIdentiy(e)}} className="btnIcon">telegram <i className="fa-brands fa-telegram"></i></button>
                        </div>
                    </div>
                    <div onClick={()=>props.setTrigger(false)}><i class="fa-solid fa-xmark"></i></div>
                    {props.children}
                </div>
            </div>
        </>
    ):"";
}

export default Popup