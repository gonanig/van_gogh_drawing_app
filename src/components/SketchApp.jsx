import { PaintingBrush } from "./models/PaintingBrush";
import { VanGoghAvatar } from "./models/VanGoghAvatar";

export const SketchApp = ({ mousePosition }) => {
  return (
    <>
      <PaintingBrush mousePosition={mousePosition} />
      <VanGoghAvatar />
    </>
  );
};
