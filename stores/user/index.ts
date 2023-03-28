import { makeAutoObservable } from "mobx";
import { RootStore } from '..';
import { auth } from "@/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

class UserStore {
    private rootStore: RootStore;
    currentUser: any;
    loading = true;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        onAuthStateChanged(auth, async user => {
            this.currentUser = user
            this.loading = false;
        })
        makeAutoObservable(this);
    }

    signup(email: string, password: string) {
        createUserWithEmailAndPassword(auth, email, password);
        return;
    }

    login(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    logout() {
        return signOut(auth)
    }
}

export default UserStore;