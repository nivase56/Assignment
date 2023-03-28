import React, { useEffect, useState } from "react";

const Fetchdata = () => {
  const [userdata, setdata] = useState([{}]);
  const [namedata, setnamedata] = useState("");
  const [email, setemail] = useState("");

  const fetchdata = async () => {
    await fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setdata(data.results[0]));
    localstore();
  };

  function localstore() {
    localStorage.setItem("email", userdata.email);
    localStorage.setItem("username", userdata.name.first + userdata.name.last);
    const usernamedata = localStorage.getItem("username");
    const emaildata = localStorage.getItem("email");
    setemail(emaildata);
    setnamedata(usernamedata);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="fetchers">
      {namedata ? (
        <div className="container">
          <h1>{namedata}</h1>
          <h1>{email}</h1>
        </div>
      ) : (
        <h1>Loading... Please wait</h1>
      )}
      <button onClick={fetchdata} className="refresh">
        &#x21bb;
      </button>
    </div>
  );
};

export default Fetchdata;
