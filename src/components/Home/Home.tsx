import React from "react";
// import Navbar from "../Navbar/Navabr";
import ProjectsList from "../ProjectsList/ProjectsList";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
     {/* <Navbar/> */}
     <ProjectsList/>
    </>
  );
};
export default Home;
