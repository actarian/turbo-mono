import { ReactNode } from 'react';
import styled from 'styled-components';
import { Button, className, Flex } from '../../components';
import { useSwiperIndex } from '../../hooks';

const Bullet = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  // border: 2px solid var(--color-primary-100);
  border-radius: 50%;
  transition: all ease-in-out 250ms;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid var(--color-primary-100);
    transition: all ease-in-out 250ms;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform: scale(0.8);
    transition: all ease-in-out 250ms;
  }

  &.active {

    &:before {
      border-width: 1px;
      transform: scale(1.5);
    }

    &:after {
      background: var(--color-primary-100);
    }
  }
`;

const PaginationContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 1.5rem;
  z-index: 1;
`

type SwiperPaginationProp = { items: ReactNode[] };

const SwiperPagination: React.FC<SwiperPaginationProp> = (props: SwiperPaginationProp) => {
  const [index, setIndex] = useSwiperIndex();
  // console.log('index', index);
  const onSetSlide = (index: number) => {
    setIndex(index);
  };
  return (
    <PaginationContainer>
      <Flex.Row justifyContent='center' gap='1rem'>
        {props.items.map((_, i) => (
          <Button key={i} title={i.toString()} onClick={() => onSetSlide((i + 1))}>
            <Bullet className={className({ active: index === i })} />
          </Button>
        ))}
      </Flex.Row>
    </PaginationContainer>
  );
}

export default SwiperPagination;
