import "./index.css";

const Homepage = () => {
  componentDidMount = () => {
    fetchData();
  };

  fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const options = {
      method: "GET",
    };
    const response = await fetch(options, url);
    const data = JSON.stringify(response);
    console.log(response.status);
  };
  return (
    <>
      <div className="main-conatiner"></div>
    </>
  );
};

export default Homepage;
