import React, { useEffect, useState } from "react";

const Fetchdata = () => {
  const [userdata, setdata] = useState({}); 
  const [namedata, setnamedata] = useState("");
  const [email, setemail] = useState("");

  function localstore() {
    console.log(userdata);
    localStorage.setItem("email", userdata.email);
    localStorage.setItem("username", userdata.name.first + userdata.name.last);
    const usernamedata = localStorage.getItem("username");
    const emaildata = localStorage.getItem("email");
    setemail(emaildata);
    setnamedata(usernamedata);
  }

  const fetchdata = async () => {
    await fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setdata(data.results[0]));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    if (userdata?.email?.length > 0) {
      localstore();
    }
  }, [userdata]);

  return (
    <div className="fetchers">
      <div className="container">
        <h1>{namedata}</h1>
        <h1>{email}</h1>
        <button onClick={fetchdata} className="refresh">
          &#x21bb;
        </button>
      </div>
    </div>
  );
};

export default Fetchdata;
