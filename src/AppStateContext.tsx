import React ,{ createContext,useReducer,useContext } from "react"

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

interface AppStateContextProps {
    state:AppState
}
interface Task {
    id:string
    text:string
}

interface List {
    id:string
    text:string
    tasks:Task[]
}

export interface AppState {
    lists:List[]
}



const appData:AppState = {
    lists:[
        {
            id:"0",
            text:"To DO",
            tasks:[{id:"c0",text:"Generate app scaffold"}]
        },
        {
            id:"1",
            text:"In Progress",
            tasks:[{id:"c2",text:"Learn TypeScript"}]
        },
        {
            id:"2",
            text:"Done",
            tasks:[{id:"c3",text:"begin to use static typing"}]
        }
    ]
}

export const AppStateProvider = ({children}:React.PropsWithChildren<{}>)=>{
    return (
        <AppStateContext.Provider value = {{state:appData}}>
        {children}
        </AppStateContext.Provider>
    )

}

export const useAppState = () =>{
    return useContext(AppStateContext)
}
