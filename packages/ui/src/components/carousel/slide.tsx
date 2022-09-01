import { motion, MotionStyle, MotionValue, PanInfo } from 'framer-motion';
import React from 'react';

interface SlideProps {
  index: number;
  renderSlide: (props: { index: number }) => JSX.Element;
  x: MotionValue;
  onDragEnd(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void;
}

const pageStyle: MotionStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
};

export const Slide: React.FC<SlideProps> = ({ index, renderSlide, x, onDragEnd }) => {
  const child = React.useMemo(() => renderSlide({ index }), [index, renderSlide]);
  return (
    <motion.div
      style={{ ...pageStyle, x, left: `${index * 100}%`, right: `${index * 100}%` }}
      draggable drag='x' dragElastic={1} onDragEnd={onDragEnd}>
      {child}
    </motion.div>
  );
};

Slide.displayName = 'page';
