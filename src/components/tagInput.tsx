"use client";

import { createTag } from "@/app/actions";
import { useState } from "react";

export default function TagInputs() {
  const [tagName, setTagName] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    createTag(tagName);
  }

  function handleInputChange(event) {
    setTagName(event.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="tag_name"
          id="tag_name"
          value={tagName}
          onChange={handleInputChange}
          className="border mt-6 font-body focus:border-darkpurple"
          required
        />
        <br />
        <button
          type="submit"
          className="font-head bg-green hover:bg-darkGreen text-white p-4 rounded-3xl mt-3 font-semibold"
        >
          Create Tag
        </button>
      </form>
    </>
  );
}
