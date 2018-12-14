import { getAddDrawer, getCloseDrawer, DrawersPayload } from '../modules';

export function addDrawer(drawer: DrawersPayload) {
  const action: any = getAddDrawer();
  return action(drawer);
}

export function closeDrawer(id: string | number) {
  const action: any = getCloseDrawer();
  return action(id);
}
