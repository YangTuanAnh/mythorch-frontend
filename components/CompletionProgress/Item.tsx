interface ItemProps {
    name: string,
    chapter: string,
    progress: number
}

const Item: React.FC<ItemProps> = (props) => {

    return (
        <div className='flex flex-row w-full mx-1 bg-secondary'>

        </div>
    )
}

export default Item;