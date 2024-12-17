import React, { useState } from "react";
type CounterProps = {};

const Counter: React.FC<CounterProps> = () => {
    const [value, setvalue] = useState(0);

  const handleDecrement = () => {
    setvalue((prev)=>prev-1)
  };
  const handleIncrement = () => {
    setvalue((prev)=>prev+1)
  };

  return (
    <>
      <div style={styles.header}>
        <h1  style={{textAlign:'center'}}>Counter App</h1>
      </div>
      <div style={{display:"flex",flex:1, flexDirection:'row', justifyContent:'space-evenly',alignItems:'center', marginTop:50}}>
      <div style={{}}>
        <button onClick={handleIncrement} style={{padding:15,backgroundColor:'#1f74ba',color:'#fff',margin:5, borderRadius:15 }}>Increment</button>
        <button onClick={handleDecrement} style={{padding:15,backgroundColor:'#1f74ba',color:'#fff',margin:5, borderRadius:15 }}>Decrement</button>
      </div>
      <div style={{}}>
        <h1 style={{textAlign:'center'}}>Output Screen</h1>
        <h3 style={{textAlign:'center'}}>{value}</h3>
      </div>
      </div>
      
    </>
  );
};
export default Counter;


const styles = {
  header:{
     backgroundColor:'#1f74ba',
     padding:1, 
     color:'#fff'
    },
}
