interface MessageProps {
    type: "GPT-3" | "CLIENT",
    content: string
}

const Message: React.FC<MessageProps> = (props) => {
    return (
        <div>
            <span className="text-black ">{props.content}</span>
        </div>
    )
}

export default Message;