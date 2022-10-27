
import { lazy } from 'react';

// https://github.com/feathericons/react-feather

export { default as ArrowLeft } from './arrow-left';
export { default as ArrowRight } from './arrow-right';
export { default as Calendar } from './calendar';
export { default as ChevronDown } from './chevron-down';
export { default as ChevronLeft } from './chevron-left';
export { default as ChevronRight } from './chevron-right';
export { default as EyeOff } from './eye-off';
export { default as Eye } from './eye';
export { default as Facebook } from './facebook';
export { default as Filter } from './filter';
export { default as Github } from './github';
export { default as Grid } from './grid';
export { default as Hexagon } from './hexagon';
export { default as Instagram } from './instagram';
export { default as Linkedin } from './linkedin';
export { default as Lock } from './lock';
export { default as MapPin } from './map-pin';
export { default as Menu } from './menu';
export { default as Minus } from './minus';
export { default as Percent } from './percent';
export { default as PhoneCall } from './phone-call';
export { default as Phone } from './phone';
export { default as Plus } from './plus';
export { default as RefreshCcw } from './refresh-ccw';
export { default as Search } from './search';
export { default as Send } from './send';
export { default as ShoppingCart } from './shopping-cart';
export { default as Square } from './square';
export { default as Trash } from './trash';
export { default as Truck } from './truck';
export { default as Twitter } from './twitter';
export { default as Unlock } from './unlock';
export { default as User } from './user';
export { default as Websolute } from './websolute';
export { default as XCircle } from './x-circle';
export { default as X } from './x';

export const Icons = {
  ArrowLeft: lazy(() => import('./arrow-left')),
  ArrowRight: lazy(() => import('./arrow-right')),
  Calendar: lazy(() => import('./calendar')),
  ChevronDown: lazy(() => import('./chevron-down')),
  ChevronLeft: lazy(() => import('./chevron-left')),
  ChevronRight: lazy(() => import('./chevron-right')),
  EyeOff: lazy(() => import('./eye-off')),
  Eye: lazy(() => import('./eye')),
  Facebook: lazy(() => import('./facebook')),
  Filter: lazy(() => import('./filter')),
  Github: lazy(() => import('./github')),
  Grid: lazy(() => import('./grid')),
  Hexagon: lazy(() => import('./hexagon')),
  Instagram: lazy(() => import('./instagram')),
  Linkedin: lazy(() => import('./linkedin')),
  Lock: lazy(() => import('./lock')),
  MapPin: lazy(() => import('./map-pin')),
  Menu: lazy(() => import('./menu')),
  Minus: lazy(() => import('./minus')),
  Percent: lazy(() => import('./percent')),
  PhoneCall: lazy(() => import('./phone-call')),
  Phone: lazy(() => import('./phone')),
  Plus: lazy(() => import('./plus')),
  RefreshCcw: lazy(() => import('./refresh-ccw')),
  Search: lazy(() => import('./search')),
  Send: lazy(() => import('./send')),
  ShoppingCart: lazy(() => import('./shopping-cart')),
  Square: lazy(() => import('./square')),
  Trash: lazy(() => import('./trash')),
  Truck: lazy(() => import('./truck')),
  Twitter: lazy(() => import('./twitter')),
  Unlock: lazy(() => import('./unlock')),
  User: lazy(() => import('./user')),
  Websolute: lazy(() => import('./websolute')),
  XCircle: lazy(() => import('./x-circle')),
  X: lazy(() => import('./x'))
}
      