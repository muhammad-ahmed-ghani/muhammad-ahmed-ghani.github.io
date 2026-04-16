import { useEffect } from 'react';
import { useScroll } from '@react-three/drei';
import { setScrollEl } from '../utils/scrollStore';

// Lives inside <ScrollControls> to capture the drei scroll element
// and expose it to non-canvas components via the scrollStore.
const ScrollCapture: React.FC = () => {
  const scroll = useScroll();
  useEffect(() => {
    if (scroll.el) setScrollEl(scroll.el as HTMLElement);
  }, [scroll.el]);
  return null;
};

export default ScrollCapture;
