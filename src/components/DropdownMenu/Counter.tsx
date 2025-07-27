
import React, { CSSProperties, useEffect, useState } from "react";

type FetchProps = {};

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

const DropdownMenu: React.FC<FetchProps> = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [showDropDownList, setShowDropDownList] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const get = await fetch("https://dummyjson.com/users").then((res) =>
      res.json()
    );
    setData(get.users);
    setLoading(false);
  };

  const handleClick = () => {
    setShowDropDownList(!showDropDownList);
  };

  const filteredData = data.filter(
    (item) =>
      item.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.firstName.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (loading)
    return (
      <h1 style={{ textAlign: "center", marginTop: "50px", color: "#1f74ba" }}>
        Loading...
      </h1>
    );

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={{ margin: 0 }}>DropdownMenu</h1>
      </div>

      <div style={styles.wrapper}>
        <button style={styles.toggleButton} onClick={handleClick}>
          <span>DropdownMenu</span>
          <img
            src={
              showDropDownList
                ? "/src/assets/dropDownImg.png"
                : "/src/assets/right-arrow.png"
            }
            alt="Toggle"
            style={{
              width: "20px",
              height: "20px",
              transition: "transform 0.3s ease",
            }}
          />
        </button>

        {showDropDownList && (
          <div style={styles.dropdownContent}>
            <div style={styles.searchBox}>
              <input
                type="text"
                id="search"
                placeholder="Search users..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                style={styles.searchInput}
              />
            </div>

            <div style={styles.userList}>
              {filteredData.length === 0 ? (
                <p style={styles.noItems}>No items found</p>
              ) : (
                filteredData.map((user) => (
                  <div key={user.id} style={styles.userItem}>
                    {user.firstName} {user.lastName}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;

const styles : { [key: string]: CSSProperties }= {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "20px",
  },
  header: {
    backgroundColor: "#1f74ba",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px 5px 0 0",
  },
  wrapper: {
    // position: "relative",
    marginTop: "10px",
  },
  toggleButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#1f74ba",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 15px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  dropdownContent: {
    marginTop: "15px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #e0e0e0",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    animation: "fadeIn 0.3s ease-in-out",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  searchInput: {
    flex: "1",
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  userList: {
    maxHeight: "200px",
    overflowY:"auto" as React.CSSProperties["overflowY"],
  },
  userItem: {
    padding: "8px 10px",
    borderBottom: "1px solid #e0e0e0",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  noItems: {
    textAlign: "center" as React.CSSProperties["textAlign"],
    color: "#888",
    marginTop: "10px",
  },
};
