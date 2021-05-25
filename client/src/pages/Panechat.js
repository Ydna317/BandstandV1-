// import React, { useState } from "react";
// import SlidingPane from "react-sliding-pane";
// import "react-sliding-pane/dist/react-sliding-pane.css";
// import ChatWindow from "../components/ChatWindow";
// import "./Pane.css";


// const Panechat  = () => {

//     const [state, setState] = useState({
//       isPaneOpen: false,
//       isPaneOpenLeft: false,
//     });

//     return (
//         <div>
                
                    
//             <div style={{ marginTop: "38px" }}>
//                 <button onClick={() => setState({ isPaneOpenBottom: true })}>
//                     Click to join the chatroom 
//                 </button>
//             </div>
//             <SlidingPane
//                     className="some-custom-class"
//                     closeIcon={<div> Back</div>}
//                     isOpen={state.isPaneOpenBottom }
//                     title="Welcom to the Spotify Chatroom!"
//                     from="bottom"
//                     width="100%"
//                     onRequestClose={() => {
//                     // triggered on "<" on left top click or on outside click
//                     setState({ isPaneOpen: false }); }}
//                     >
//                 <div><ChatWindow /></div>
//             </SlidingPane>
                
//         </div>
//     )
// };

// export default Panechat;

import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
// import ChatWindow from "../components/ChatWindow";
import Chat from "../components/chat/Chat";
import "./Pane.css";
const Panechat  = () => {
    const [state, setState] = useState({
      isPaneOpen: false,
      isPaneOpenLeft: false,
    });
    return (
        <div>
            <div style={{ marginTop: "38px" }}>
                <button onClick={() => setState({ isPaneOpenBottom: true })}>
                    Click here to join the chatroom!
                </button>
            </div>
            <SlidingPane
                    closeIcon={<div>Click here to collapse the chat</div>}
                    className="some-custom-class"
                    isOpen={state.isPaneOpenBottom }
                    title="Welcome to the Bandstand chatroom!"
                    from="bottom"
                    width="100%"
                    onRequestClose={() => setState({ isPaneOpenBottom: false })}
                    >
                <div><Chat /></div>
            </SlidingPane>
        </div>
    )
};
export default Panechat;

  
