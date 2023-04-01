import { useContext } from "react";
import { ChatBoxContext } from "../context/ChatBoxContext";
import Message from "./Message"

interface MessageWidgetProps {
    
}

const MessageWidget: React.FC<MessageWidgetProps> = (props) => {
    const { messagesData } = useContext(ChatBoxContext);
    return (
        <div className="flex flex-col overflow-y-auto xl:bottom-20 sm:bottom-14 absolute self-center" style={{ height: '88%', width: '95%' }}>
            {messagesData?.map((message, index) =><div key={'message'+index}className={`w-full flex-row flex ${message.type === 'GPT-3'? 'justify-start': 'justify-end'}`}><Message type={message.type} content={message.content} /></div>)}
        </div>
    )
}

export default MessageWidget;