import '../App.css';
import Header from "../Header.js";
import MeetingList from "../MeetingList.js";

function Home() {
  const titleText = "CIT 313 Introduction to REACT";
  return (
    
    <div className="App">
      <Header headingText={titleText}/>
      <MeetingList />
       </div>
    
  );
}

export default Home;