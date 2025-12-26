import React, { useState, type MouseEvent, type TouchEvent } from "react";
import bg from "../assets/bg-bd.png";
import person1 from "../assets/men.png";
import person2 from "../assets/women.png";

const ExpandableCard: React.FC = () => {
  const initialWidth = 600;
  const maxExpand = 400;

  const [width, setWidth] = useState<number>(initialWidth);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    const newWidth = Math.min(
      initialWidth + maxExpand,
      Math.max(initialWidth, initialWidth + delta)
    );
    setWidth(newWidth);
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    setWidth(initialWidth);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - startX;
    const newWidth = Math.min(
      initialWidth + maxExpand,
      Math.max(initialWidth, initialWidth + delta)
    );
    setWidth(newWidth);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setWidth(initialWidth);
  };

  const expandRatio = (width - initialWidth) / maxExpand;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div
        className="flex overflow-hidden select-none touch-none shadow-2xl cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ height: "360px" }}
      >
        <div
          className="flex-shrink-0 bg-[#CEA97B] relative overflow-hidden transition-[width] duration-500 ease-out"
          style={{ width: `${initialWidth}px` }}
        >
          <img src={bg} alt="Text" className="w-full h-full " />

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute w-40 h-48 flex items-center justify-center transition-all duration-500 ease-out"
              style={{ left: `${100 + expandRatio * 200}px` }}
            >
              <div className="text-center">
                <img
                  src={person2}
                  className="w-40 h-32 mx-auto mb-2 object-cover"
                />
              </div>
            </div>

            <div className="absolute right-16 w-40 h-48 flex items-center justify-center">
              <div className="text-center">
                <img
                  src={person1}
                  className="w-40 h-32 mx-auto mb-2 object-contain"
                />
              </div>
            </div>
          </div>

          {expandRatio < 0.5 && (
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex items-center gap-2 animate-pulse">
              <div className="text-[#ffffff] text-3xl font-bold">→</div>
            </div>
          )}
        </div>

        <div
          className={`flex flex-col justify-center items-center bg-white transition-all duration-500 ease-out relative overflow-hidden 
            ${
              width <= initialWidth
                ? "p-0 border-0"
                : "p-8 border-4 border-[#CEA97B]"
            }
          `}
          style={{
            width: `${width - initialWidth}px`,
            opacity: width > initialWidth ? 1 : 0,
          }}
        >
          {width > initialWidth + 50 && (
            <>
              <div className="text-sm text-gray-800 mb-8">
                สุขสันต์วันเกิดนะ! 🎉 ขอให้ปีนี้เป็นปีที่เต็มไปด้วยความสุข
                ความสำเร็จ และเรื่องดี ๆ ที่คุณสมควรได้รับ ขอให้สุขภาพแข็งแรง
                จิตใจแจ่มใส มีรอยยิ้มบนใบหน้าในทุก ๆ วัน
                และไม่ว่าจะเจอเรื่องท้าทายหรืออุปสรรคใด ๆ
                ขอให้คุณผ่านมันไปได้ด้วยความเข้มแข็งและความมั่นใจในตัวเอง
                ขอให้ความฝันที่ตั้งใจไว้เป็นจริง และได้เจอแต่คนดี ๆ รอบตัว
                ได้รับความรักและความอบอุ่นจากคนรอบข้าง มีความทรงจำดี ๆ
                เต็มไปหมดในปีนี้ และไม่ว่าอนาคตจะเป็นอย่างไร
                ขอให้คุณก้าวไปข้างหน้าด้วยความสุขและพลังบวกเสมอ 🌟
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpandableCard;
