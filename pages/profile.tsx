import Calendar from "@/components/Calendar";
import CompletionProgress from "@/components/CompletionProgress";
import Layout from "@/components/Layout";
import ProgressChart from "@/components/ProgressChart";
import WelcomeContainer from "@/components/WelcomeContainer";

interface ProfileProps {

}

const Profile: React.FC<ProfileProps> = (props) => {

    return (
        <Layout>
            <div className="flex flex-col w-full py-5">
                <WelcomeContainer username='Ayo' percent={70} />
                <div className="flex flex-row xl:w-3/5 xl:h-full sm:w-11/12 sm:h-full sm:my-5 self-center">
                    <div className="flex flex-col xl:w-full xl:h-full sm:w-4/5 mx-1 xl:mr-5 sm:mr-4">
                        <ProgressChart/>
                        <Calendar/>
                    </div>
                    <CompletionProgress books={[["Hello", "Chapter 4", 75]]}/>
                </div>
            </div>
        </Layout>
    )
}

export default Profile;