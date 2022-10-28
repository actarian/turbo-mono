
import { Skeleton } from '../../components';

export const GoogleMapSkeleton: React.FC<{}> = () => (
  <Skeleton height="Min(100vw, 600px)" loading={true}></Skeleton>
);
