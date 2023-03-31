interface MessageProps {
    type: "GPT-3" | "CLIENT",
    content: string
}

const Message: React.FC<MessageProps> = (props) => {
    return (
        <div className={`xl:w-4/5 ${props.type==='GPT-3'?'bg-white': 'bg-thirdWELCOME'} mx-1 px-1 py-1 xl:rounded-2xl h-fit my-3 ${props.type==='GPT-3'?'content-start': 'content-end'}`}>
            <span className="text-black m-1 text-justify text-lg ">{props.content}</span>
        </div>
    )
}

export default Message;