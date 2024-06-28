"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount((cur) => cur + 1)}>{count}</button>;
};
export default Counter;
