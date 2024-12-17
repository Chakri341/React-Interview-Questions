import React, { useEffect, useState } from "react";
type FetchProps = {};

type user = {
  id: number;
  firstName: string;
  lastName: string;
};

const Search: React.FC<FetchProps> = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<user[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const get = await fetch("https://dummyjson.com/users").then((res) =>
      res.json()
    );
    setData(get.users);
    console.log("get ", get);
    setLoading(false);
  };

  const filteredData=data.filter((data)=>data.lastName.toLowerCase().includes(searchValue.toLowerCase()) || data.firstName.toLowerCase().includes(searchValue.toLowerCase()))

  if (loading) return <h1>loading.............</h1>;

  return (
    <>
      <div style={styles.header}>
        <h1 style={{ textAlign: "center" }}>Fetch Data from Api</h1>
      </div>
      <div style={{marginTop:20, display: "flex" ,flexDirection:"row",justifyContent:'center', alignItems:'center' }}>
        <label htmlFor="search">Search</label>
        <input type="text"
         name="search" 
         id="search"
         value={searchValue}
         onChange={(event) => setSearchValue(event.target.value)}         />
      </div>
      <div style={{ marginTop: 50 }}>
        {filteredData?.length == 0 ? (
          <h1 style={{textAlign:'center'}}>No items Found</h1>
        ) : (
          filteredData?.map((item) => {
            return (
              <h1 style={{ textAlign: "center" }}>
                {item.firstName}
                {"  "}
                {item.lastName}
              </h1>
            );
          })
        )}
      </div>
    </>
  );
};
export default Search;

const styles = {
  header: {
    backgroundColor: "#1f74ba",
    padding: 1,
    color: "#fff",
  },
};
