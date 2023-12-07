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
        />
        <button type="submit">Create Tag</button>
      </form>
    </>
  );
}
