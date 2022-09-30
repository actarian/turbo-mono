import type { IPage } from '@websolute/models';
import { Flex } from '@websolute/ui';
import { motion } from 'framer-motion';

const easing = [0.175, 0.85, 0.42, 0.96];

const loadingVariants = {
  exit: {
    opacity: 1,
    transition: { duration: 0.5, ease: easing, delay: 0 }
  },
  enter: {
    opacity: 0,
    transition: { duration: 0.5, ease: easing, delay: 1 }
  }
};

const textVariants = {
  exit: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: easing, delay: 0.4 }
  },
  enter: {
    scale: 1.1,
    opacity: 0,
    transition: { duration: 0.5, ease: easing, delay: 0.4 }
  }
};

type Props = {
  page: IPage;
};

export type LoadingProps = Props;

const PageLoader = ({ page }: LoadingProps) => {
  return (
    <motion.div initial="exit" animate="enter" exit="exit" css={`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--color-neutral-200);
      color: var(--color-neutral-900);
      font-size: 100px;
      z-index: 10000;
      opacity: 0.5;
      pointer-events: none;
    `} variants={loadingVariants}>
      <Flex.Row justifyContent="center" alignItems="center" height="100%">
        <motion.div variants={textVariants}>{page.title}</motion.div>
      </Flex.Row>
    </motion.div>
  )
}

export default PageLoader;
