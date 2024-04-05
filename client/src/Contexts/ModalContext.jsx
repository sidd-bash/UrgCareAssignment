import React,{createContext,useState} from 'react';

const ModalContext = createContext({
    modal:false,
    setModal:()=>{}
});


const ModalProvider = ({children})=>{
    const [modal,setModal] = useState(false);
    const handleModal = ()=>{setModal(!modal);console.log(modal)}
    return(
        <ModalContext.Provider 
        value={{
            modal,
            setModal: handleModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export {ModalContext,ModalProvider}