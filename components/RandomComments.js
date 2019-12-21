import React, { useState, useEffect, useContext } from "react";
import { GlobalSpinnerActionsContext } from "../context/GlobalSpinnerContext";

const RandomComments = props => {
  const [comments, setComments] = useState([]);
  const setGlobalSpinner = useContext(GlobalSpinnerActionsContext);

  useEffect(() => {
    (async () => {
      setGlobalSpinner(true);
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await result.json();
      setComments(data);
      setGlobalSpinner(false);
    })();
  }, [setGlobalSpinner]);

  return (
    <div>
      {comments.map(comment => {
        const { name, body, id } = comment;
        return (
          <div key={id}>
            <p style={{ fontWeight: "bold" }}>{name}</p>
            <p> {body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RandomComments;
