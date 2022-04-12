import { createContext, ReactNode } from "react";
interface progressDefault{
    lastTime: string,
    status: string
}
const progressDefault = {
    lastTime: '31/5/2021',
    status: 'In Progress',
}
export const ProgressContext = createContext<progressDefault>(progressDefault);
interface IProps{
   children : ReactNode
}
const ProgressContextProvider: React.FC<IProps> = ({ children }) => {
    
    return <ProgressContext.Provider value={progressDefault}>
        {children}
    </ProgressContext.Provider>
}
export default ProgressContextProvider;