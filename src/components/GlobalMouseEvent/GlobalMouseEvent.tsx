import { useEffect, useState } from "react";

type MousePosition = {
  x: number;
  y: number;
};

export default function GlobalMouseEvent(): JSX.Element {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    console.log("UseEffect");
    window.addEventListener("pointermove", moveHandler);

    return () => {
      window.removeEventListener("pointermove", moveHandler);
    };
  }, []);

  function moveHandler(event: MouseEvent) {
    setPosition({ x: event.clientX, y: event.clientY });
  }

  console.log("RENDER");

  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        background: "gray",
        opacity: "0.5",
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: "200px",
        height: "50px",
        top: "20px",
        left: "0",
      }}
    >
      {position.x}
      <br />
      {position.y}
    </div>
  );
}
