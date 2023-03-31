import Calendar from "@/components/Calendar";
import CompletionProgress from "@/components/CompletionProgress";
import Layout from "@/components/Layout";
import ProgressChart from "@/components/ProgressChart";
import WelcomeContainer from "@/components/WelcomeContainer";
import { GetServerSideProps } from "next";
import { BarChartConfiguration } from "@/components/Types";

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            books: [
                {
                    title: "The Alchemist",
                    chapter: 'Chapter 1',
                    progress: 10,
                },
                {
                    title: "Harry Potter",
                    chapter: 'Chapter 1',
                    progress: 20,
                },
                {
                    title: "To Kill a Mockingbird",
                    chapter: 'Chapter 1',
                    progress: 50,
                },
                {
                    title: "One Hundred Years of Solitude",
                    chapter: 'Chapter 1',
                    progress: 54,
                },
                {
                    title: "A Passage to India",
                    chapter: 'Chapter 1',
                    progress: 100,
                },
                {
                    title: "Invisible Man",
                    chapter: 'Chapter 1',
                    progress: 5,
                },
                {
                    title: "Beloved",
                    chapter: 'Chapter 1',
                    progress: 88,
                },
                {
                    title: "Things Fall Apart",
                    chapter: 'Chapter 1',
                    progress: 99,
                },
            ],
            progressChart: {
                type: "bar",
                data: {
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    datasets: [
                        {
                            label: "My First dataset",
                            backgroundColor: "hsl(217, 57%, 51%)",
                            borderColor: "hsl(217, 57%, 51%)",
                            data: [0, 10, 5, 2, 20, 30, 45],
                        },
                    ]
                },
                options: {}
            }
        }

    }
};



interface ProfileProps {
    books: { title: string, chapter: string, progress: number }[],
    progressChart: BarChartConfiguration
}

const Profile: React.FC<ProfileProps> = (props) => {

    return (
        <Layout>
            <div className="flex flex-col w-full py-2">
                <WelcomeContainer username='Ayo' percent={70} />
                <div className="flex flex-row xl:w-2/3 xl:h-full sm:w-11/12 sm:h-full sm:my-5 self-center">
                    <div className="flex flex-col xl:w-full xl:h-full sm:w-4/5 mx-1 xl:mr-5 sm:mr-4">
                        <ProgressChart type={props.progressChart.type} data={props.progressChart.data} options={props.progressChart.options} />
                        {/* <Calendar /> */}
                    </div>
                    <CompletionProgress books={props.books} />
                </div>
            </div>
        </Layout>
    )
}

export default Profile;