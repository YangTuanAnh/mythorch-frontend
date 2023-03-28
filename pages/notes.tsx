import Layout from "@/components/Layout";
import NoteBox from "@/components/NoteBox";
import { GetServerSideProps } from "next";

interface NotesPageProps {
    boxContents: string[][],
    boxTitles: string[]
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            boxContents: [['Book 1', 'Book 1', 'Book 1', 'Book 1', 'Book 1', 'Book 1', 'Book 1'], ['Book 1', 'Book 1', 'Book 1', 'Book 1'], ['Book 1', 'Book 1', 'Book 1', 'Book 1'], ['Book 1', 'Book 1', 'Book 1', 'Book 1']],
            boxTitles: ['No status', 'In progress', 'Reviewing', 'Completed']
        }
    }
}

const Notes: React.FC<NotesPageProps> = (props) => {
    return (
        <Layout>
            <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 2xl:gap-4 sm:gap-2 w-full justify-items-center">
                <NoteBox contents={props.boxContents[0]} color='bg-s2condNOSTATUS' bgcolor='bg-s2condNOSTATUSBG' title={props.boxTitles[0]} />
                <NoteBox contents={props.boxContents[1]} color='bg-s2condINPROGRESS' bgcolor='bg-s2condINPROGRESSBG' title={props.boxTitles[1]} />
                <NoteBox contents={props.boxContents[2]} color='bg-s2condREVIEWING' bgcolor='bg-s2condREVIEWINGBG' title={props.boxTitles[2]} />
                <NoteBox contents={props.boxContents[3]} color='bg-s2condCOMPLETED' bgcolor='bg-s2condCOMPLETEDBG' title={props.boxTitles[3]} />
            </div>
        </Layout>
    )
}

export default Notes;