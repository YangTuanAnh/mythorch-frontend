import WelcomePicture from '../../assets/images/welcome-profile.png';
import Wave from '../../assets/images/wave.png';
import Image from 'next/image';
interface WelcomeContainer {
    username: string
    percent: number
}

const WelcomeContainer: React.FC<WelcomeContainer> = (props) => {

    return (
        <div className='flex flex-row xl:m-2 sm:mx-1 sm:w-11/12 px-2 py-2 bg-secondary xl:h-1/3 sm:h-1/4 xl:w-2/3 items-center self-center bg-thirdWELCOME rounded-3xl relative'>
            <div className='flex flex-col xl:w-5/6 sm:w-3/4'>
                <div className="flex flex-col xl:w-3/5 sm:w-3/4 sm:text-4xl  xl:text-4xl font-bold my-2 absolute left-5 top-5 animate-bounce">
                    Welcome back, {props.username}!
                    {/* <Image src={Wave} alt="Waving hand" className='w-10 absolute xl:right-5 sm:right-20 sm:top-2'/> */}
                </div>
                <div className="flex flex-col absolute left-5 text-xl">
                    <p className="my-1">You’ve spent <b>{props.percent}</b>% more time learning than last week!</p>
                    <p>Keep up the great work!</p>
                </div>
            </div>
            <Image src={WelcomePicture} alt="Welcome to MyThorch" className='xl:w-44 xl:h-44 sm:w-32 sm:h-32 absolute right-2'/>
        </div>
    )
}

export default WelcomeContainer;