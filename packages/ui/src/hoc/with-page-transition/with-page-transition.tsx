import { Flex, Text } from '@websolute/ui';
import { motion } from 'framer-motion';

const easing = [0.175, 0.85, 0.42, 0.96];

const loadingVariants = {
  initial: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { delay: 0, duration: 0.5, ease: easing }
  },
  exit: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { delay: 0, duration: 0.5, ease: easing }
  },
  enter: {
    // clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    transition: { delay: 1, duration: 0.5, ease: easing }
  },
};

const textVariants = {
  initial: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.6, duration: 0.5, ease: easing }
  },
  exit: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.6, duration: 0.5, ease: easing }
  },
  enter: {
    scale: 1.1,
    opacity: 0,
    transition: { delay: 0.6, duration: 0.5, ease: easing }
  }
};

export const withPageTransition = (OriginalComponent: React.FC<any>) => {
  const Transition = (props: any) => {
    const page = props.page || { title: 'Page Title' };
    return (
      <>
        <OriginalComponent {...props} />
        <motion.div
          initial="initial" animate="enter" exit="exit"
          variants={loadingVariants}
          css={`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--color-neutral-200);
            color: var(--color-neutral-900);
            font-size: 100px;
            z-index: 10000;
            opacity: 1;
            pointer-events: none;
        `}
        >
          <Flex.Row justifyContent="center" alignItems="center" height="100%">
            <motion.div variants={textVariants}>
              <Text size="1">{page.title}</Text>
            </motion.div>
          </Flex.Row>
        </motion.div>
      </>
    );
  };
  return Transition;
};
