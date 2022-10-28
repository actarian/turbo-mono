
import { lazy } from 'react';

// https://github.com/feathericons/react-feather

export * from './arrow-left';
export * from './arrow-right';
export * from './calendar';
export * from './chevron-down';
export * from './chevron-left';
export * from './chevron-right';
export * from './eye-off';
export * from './eye';
export * from './facebook';
export * from './filter';
export * from './github';
export * from './grid';
export * from './hexagon';
export * from './instagram';
export * from './linkedin';
export * from './lock';
export * from './map-pin';
export * from './menu';
export * from './minus';
export * from './percent';
export * from './phone-call';
export * from './phone';
export * from './plus';
export * from './refresh-ccw';
export * from './search';
export * from './send';
export * from './shopping-cart';
export * from './square';
export * from './trash';
export * from './truck';
export * from './twitter';
export * from './unlock';
export * from './user';
export * from './websolute';
export * from './x-circle';
export * from './x';

export const Icons = {
  ArrowLeft: lazy(() => import('./arrow-left').then( module => ({ default: module.ArrowLeft }) )),
  ArrowRight: lazy(() => import('./arrow-right').then( module => ({ default: module.ArrowRight }) )),
  Calendar: lazy(() => import('./calendar').then( module => ({ default: module.Calendar }) )),
  ChevronDown: lazy(() => import('./chevron-down').then( module => ({ default: module.ChevronDown }) )),
  ChevronLeft: lazy(() => import('./chevron-left').then( module => ({ default: module.ChevronLeft }) )),
  ChevronRight: lazy(() => import('./chevron-right').then( module => ({ default: module.ChevronRight }) )),
  EyeOff: lazy(() => import('./eye-off').then( module => ({ default: module.EyeOff }) )),
  Eye: lazy(() => import('./eye').then( module => ({ default: module.Eye }) )),
  Facebook: lazy(() => import('./facebook').then( module => ({ default: module.Facebook }) )),
  Filter: lazy(() => import('./filter').then( module => ({ default: module.Filter }) )),
  Github: lazy(() => import('./github').then( module => ({ default: module.Github }) )),
  Grid: lazy(() => import('./grid').then( module => ({ default: module.Grid }) )),
  Hexagon: lazy(() => import('./hexagon').then( module => ({ default: module.Hexagon }) )),
  Instagram: lazy(() => import('./instagram').then( module => ({ default: module.Instagram }) )),
  Linkedin: lazy(() => import('./linkedin').then( module => ({ default: module.Linkedin }) )),
  Lock: lazy(() => import('./lock').then( module => ({ default: module.Lock }) )),
  MapPin: lazy(() => import('./map-pin').then( module => ({ default: module.MapPin }) )),
  Menu: lazy(() => import('./menu').then( module => ({ default: module.Menu }) )),
  Minus: lazy(() => import('./minus').then( module => ({ default: module.Minus }) )),
  Percent: lazy(() => import('./percent').then( module => ({ default: module.Percent }) )),
  PhoneCall: lazy(() => import('./phone-call').then( module => ({ default: module.PhoneCall }) )),
  Phone: lazy(() => import('./phone').then( module => ({ default: module.Phone }) )),
  Plus: lazy(() => import('./plus').then( module => ({ default: module.Plus }) )),
  RefreshCcw: lazy(() => import('./refresh-ccw').then( module => ({ default: module.RefreshCcw }) )),
  Search: lazy(() => import('./search').then( module => ({ default: module.Search }) )),
  Send: lazy(() => import('./send').then( module => ({ default: module.Send }) )),
  ShoppingCart: lazy(() => import('./shopping-cart').then( module => ({ default: module.ShoppingCart }) )),
  Square: lazy(() => import('./square').then( module => ({ default: module.Square }) )),
  Trash: lazy(() => import('./trash').then( module => ({ default: module.Trash }) )),
  Truck: lazy(() => import('./truck').then( module => ({ default: module.Truck }) )),
  Twitter: lazy(() => import('./twitter').then( module => ({ default: module.Twitter }) )),
  Unlock: lazy(() => import('./unlock').then( module => ({ default: module.Unlock }) )),
  User: lazy(() => import('./user').then( module => ({ default: module.User }) )),
  Websolute: lazy(() => import('./websolute').then( module => ({ default: module.Websolute }) )),
  XCircle: lazy(() => import('./x-circle').then( module => ({ default: module.XCircle }) )),
  X: lazy(() => import('./x').then( module => ({ default: module.X }) ))
}
      