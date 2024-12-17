import React, { useEffect, useState } from "react";

type user = {
      id: number,
      firstName: string,
      lastName:string,
};

type FetchProps = {};

const Fetch: React.FC<FetchProps> = () => {
    const [data, setData] = useState<user[]>([]);
    const [loading, setLoading]=useState(false);

    useEffect(()=>{
     getData();
    },[])

    const getData=async()=>{
      setLoading(true);
      const get = await fetch('https://dummyjson.com/users')
      .then(res => res.json())
      setData(get.users);
      console.log("get ", get);
      setLoading(false);

    }

    if(loading) return <h1>loading.............</h1>

  return (
    <>
      <div style={styles.header}>
        <h1  style={{textAlign:'center'}}>Search Bar</h1>
      </div>
      <div style={{marginTop:50}}>
        {data?.length == 0 ? <h1>NO items Found</h1> :
        data?.map((item)=>{
         return <h1 style={{textAlign:'center'}}>{item.firstName}{'  '}{item.lastName}</h1>
         
        })}
      </div>
      
    </>
  );
};
export default Fetch;


const styles = {
  header:{
     backgroundColor:'#1f74ba',
     padding:1, 
     color:'#fff'
    },
}
