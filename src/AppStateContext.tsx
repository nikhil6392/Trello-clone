import { overrideItemAtIndex,findItemIndexById} from './utils/arrayUtils'
import { nanoid } from "nanoid"
import React ,{ createContext,useReducer,useContext } from "react"


const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

interface AppStateContextProps {
    state:AppState
    dispatch:React.Dispatch<Action>
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
    const [state,dispatch] = useReducer(appStateReducer,appData)
    return (
        <AppStateContext.Provider   value = {{state,dispatch}}>
        {children}
        </AppStateContext.Provider>
    )

}

export const useAppState = () =>{
    return useContext(AppStateContext)
}

//defining the Action for giving the ability to use it for Adding list of task

type Action = 
   | {
        type : "ADD_LIST"
        payload: string
    }
   | {
        type:"ADD_Task"
        payload:{text:string;listId:string}
    }

//Defining the appStateReducer

const appStateReducer =(state:AppState ,action:Action):AppState =>{
    switch(action.type){
        case "ADD_LIST":{
            //Reducer Logic here
            return {
                ...state,
                lists:[
                    ...state.lists,
                    { id: nanoid(),text: action.payload, tasks: []}
                ]
            }
        }
        case "ADD_Task":{
            //Reducer logic here
            const targetListIndex = findItemIndexById(
                state.lists,
                action.payload.listId
            )
              
            const targetList = state.lists[targetListIndex]

            const updatedTargetList = {
                ...targetList,
                tasks:[
                    ...targetList.tasks,
                    { id: nanoid(), text: action.payload.text }
                ]
            }
            return {
                ...state,
                lists:overrideItemAtIndex(
                    state.lists,
                    updatedTargetList,
                    targetListIndex
                )
            }
        }
        default: {
            return state
        }
    }
}

