import React, { useState, useEffect } from "react";

import { f, db } from "../config/config";

const ApprenticeList = () => {
  // const getApprenticelist = async () => {
  //       const data = await db.collection('apprentices').get();
  //       setApprenticeList(
  //           data.docs.map(item => {
  //               return { id: item.id, ...item.data()}
  //           })
  //       )
  // }

  const addDA = async name => {
    const collection = await db.collection("apprentices");
    collection.add({
      name: name,
      interests: [
        { name: "Ice skating", perWeek: 5 },
        { name: "Baking", perWeek: 7 }
      ]
    });
  };

  useEffect(() => {
    const unsubscribe = db.collection("apprentices").onSnapshot(snapshot => {
      setApprenticeList(
        snapshot.docs.map(item => {
          return { id: item.id, ...item.data() };
        })
      );
    });
    return () => unsubscribe();
  }, []);

  const [apprenticelist, setApprenticeList] = useState([{ name: "Lewis" }]);

  return (
    <div>
      <h1>My List</h1>
      {apprenticelist &&
        apprenticelist.map((element, index) => {
          return <p key={index}>{element.name}</p>;
        })}
      <button onClick={() => addDA("Paul")}>Add DA</button>
    </div>
  );
};

export default ApprenticeList;
