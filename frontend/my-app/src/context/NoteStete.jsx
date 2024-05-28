import React,{ useState } from "react";
import NoteContext from "./NotContext";

const NoteStete =(props)=>{

    const [onAddRef,setOnAddRef]=useState(1)
    const [pageValue, setPageValue] = useState(5);
    const [showNav,setShowNav]=useState(true)
    const [addUpdata,setAddUpdate]=useState()
    const [popORG,setPopORG]=useState(false)
    const [checked, setChecked] = useState(0);
    const [cartADD,setCartADD]=useState(false)
    const [idpass,setIdpass]=useState()


    const updateAddref=(value)=>setOnAddRef(onAddRef+value)
    const changepageValue = (value) => setPageValue(value)
    const updateShow=(value)=>setShowNav(value)
    const addUpdataData=(value)=>setAddUpdate(value )
    const onPopORG=(value)=>setPopORG(value)
    const onChecked=(value)=>setChecked(value)
    const onCartAdd=(value)=>setCartADD(value)
    const onIdPass=(value)=>setIdpass(value)

    return(
        <NoteContext.Provider value={{showNav,updateShow,pageValue,changepageValue,onAddRef,updateAddref,addUpdata,addUpdataData,popORG,onPopORG,checked,onChecked,cartADD,onCartAdd,idpass,onIdPass}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteStete