"use client";

import { useState } from "react";

export default function OnSubmitEx() {
  const [submited, setSubmited] = useState("");
  function handleSubmitEvent(event: React.FormEvent<HTMLFormElement>) {
    setSubmited(event.currentTarget.value);
  }
  return (
    <>
      <form onSubmit={handleSubmitEvent}>
        <p>Enter your favorite fruit:</p>
        <input type="text" className="input" name="name" />
        <br />
        <input type="submit" className="bg-blue-500 p-2 mt-1  " />
      </form>
      <p>
        My Favorite Fruit is:
        <span className="text-green-500"> {submited} </span>
      </p>
    </>
  );
}
