import { PopoverD } from '@dns/toolbox';
import { getOpenPopover } from '../modules';

export function openPopover(popover: PopoverD) {
  const action: any = getOpenPopover();
  return action(popover);
}
