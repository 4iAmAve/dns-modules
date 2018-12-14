import { getAddDialogue, getCloseDialogue, DialoguePayload } from '../modules';

export function addDialogue(dialogue: DialoguePayload) {
  const action: any = getAddDialogue();
  return action(dialogue);
}

export function closeDialogue(id: string | number) {
  const action: any = getCloseDialogue();
  return action(id);
}
