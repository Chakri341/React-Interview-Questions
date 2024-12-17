import React, { useState } from "react";
type ToggleProps = {};

const Toggle: React.FC<ToggleProps> = () => {
    const [value, setvalue] = useState(false);

  return (
    <>
      <div style={styles.header}>
        <h1  style={{textAlign:'center'}}>Toggle App</h1>
      </div>
      <div style={{display:'flex', flexDirection:'row',marginTop:50, justifyContent:'space-evenly' }}>
        <button onClick={()=>setvalue(!value)} style={{ padding:10, backgroundColor:'#1f74ba', color:'#fff'}}>{`Toggle : ${value}`}</button>
        <h2>{value ? "ON" : "OFF"}</h2>
      </div>
      
    </>
  );
};
export default Toggle;


const styles = {
  header:{
     backgroundColor:'#1f74ba',
     padding:1, 
     color:'#fff'
    },
}
