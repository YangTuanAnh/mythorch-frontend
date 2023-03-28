import { useContext, createContext, ReactNode } from 'react';
import { makeAutoObservable } from 'mobx';
import UserStore from './user';

export class RootStore {
    user = new UserStore(this);
}

export const store = new RootStore();

const StoreContext = createContext<RootStore>(store);

export const MobxStoreProvider = (props: {
    value: RootStore;
    children: ReactNode;
}) => {
    return (
        <StoreContext.Provider value={props.value}>
            {props.children}
        </StoreContext.Provider>
    );
};

export const useStore = (): RootStore => useContext(StoreContext);