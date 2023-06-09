import { useAuth } from "@/components/context/AuthContext";
import { CurrentPageContext } from "@/components/context/CurrentPageContext";
import Layout from "@/components/Layout";
import NoteBox from "@/components/NoteBox";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

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
    const {currentUser} = useAuth();
    const { setPage } = useContext(CurrentPageContext);
    
    if(!currentUser) return null;
    return (
        <Layout>
            <div className="flex justify-between w-full">
                <NoteBox contents={props.boxContents[0]} color='bg-s2condNOSTATUS' bgcolor='bg-s2condNOSTATUSBG' title={props.boxTitles[0]} />
                <NoteBox contents={props.boxContents[1]} color='bg-s2condINPROGRESS' bgcolor='bg-s2condINPROGRESSBG' title={props.boxTitles[1]} />
                <NoteBox contents={props.boxContents[2]} color='bg-s2condREVIEWING' bgcolor='bg-s2condREVIEWINGBG' title={props.boxTitles[2]} />
                <NoteBox contents={props.boxContents[3]} color='bg-s2condCOMPLETED' bgcolor='bg-s2condCOMPLETEDBG' title={props.boxTitles[3]} />
            </div>
        </Layout>
    )
}

export default Notes;