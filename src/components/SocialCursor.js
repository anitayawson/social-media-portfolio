import { useEffect } from "react";

export default function SocialCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", move);

    return () => {
      document.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <style jsx global>{`
      #custom-cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        background: url("/images/heart-cursor.svg") no-repeat center center /
          cover;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
      }
    `}</style>
  );
}
