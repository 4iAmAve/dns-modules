import { getOpenConfirmDialogue, ConfirmDialoguePayload } from '../modules';

export function openConfirmDialogue(data: ConfirmDialoguePayload) {
  const action: any = getOpenConfirmDialogue();
  return action(data);
}
