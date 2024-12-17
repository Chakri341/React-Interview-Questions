import React, { useState } from "react";
type ToggleProps = {};

const Modal: React.FC<ToggleProps> = () => {
  const [activeTab, setactiveTab] = useState<number | null>(null);

    const tabs = [
      { label: 'Tab 1', content: <div>Content of Tab 1</div> },
      { label: 'Tab 2', content: <div>Content of Tab 2</div> },
      { label: 'Tab 3', content: <div>Content of Tab 3</div> },
    ];

  return (
    <>
      <div style={styles.header}>
        <h1  style={{textAlign:'center'}}>Toggle App</h1>
      </div>
      <div style={{display:'flex', flexDirection:'row',marginTop:50, justifyContent:'space-evenly' }}>
       {tabs.map((tab, index)=>{
        return <button onClick={()=>setactiveTab(index)} style={{backgroundColor:'#1f74ba', color:'#fff', padding:15, borderRadius:10}}>{tab.label}</button>
        })
       }
      </div>
       <div style={{display:'flex', flexDirection:'row',marginTop:50, justifyContent:'space-evenly' }}>
        {activeTab!=null && tabs[activeTab].content}
       </div>
      
    </>
  );
};
export default Modal;


const styles = {
  header:{
     backgroundColor:'#1f74ba',
     padding:1, 
     color:'#fff'
    },
}
