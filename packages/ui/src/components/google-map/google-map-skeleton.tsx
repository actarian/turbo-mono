
import { Skeleton } from '../../components';

const GoogleMapSkeleton: React.FC<{}> = () => (
  <Skeleton height="Min(100vw, 600px)" loading={true}></Skeleton>
);

export default GoogleMapSkeleton;
