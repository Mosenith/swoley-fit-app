import React from "react";

export default function Button(props) {
  const { text, func } = props;

  return (
    <button
      onClick={func}
      className="px-4 mx-auto py-2 rounded-md border-[2px] bg-slate-950 border-blue-450 border-solid blueShadow duration-200"
    >
      <p>{text}</p>
    </button>
  );
}
