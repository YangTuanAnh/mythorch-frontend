import { useContext, createContext, ReactNode } from 'react';
import { makeAutoObservable } from 'mobx';

export class RootStore {
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