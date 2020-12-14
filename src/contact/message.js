import React, { useState } from "react";
import Success from "./success";
import Contact from "./contact";

const Message = () => {
  const [message, setMessage] = useState(true);
  return (
    <div>
      {message ? (
        <div>
          <Contact callback={() => setMessage(false)} />
        </div>
      ) : (
        <div>
          <Success />
        </div>
      )}
    </div>
  );
};

export default Message;
