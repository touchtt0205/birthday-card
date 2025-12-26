import { useState } from "react";
import "./SlideCard.css";

const SlideCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`wrapper ${open ? "open" : ""}`}>
      <div className="card">
        <div className="image">
          <img src="/img.jpg" alt="pic" />
        </div>

        <div className="text">
          <h1>ข้อความ</h1>
          <button onClick={() => setOpen(false)}>ปิด</button>
        </div>
      </div>

      <button onClick={() => setOpen(!open)}>Slide</button>
    </div>
  );
};

export default SlideCard;
