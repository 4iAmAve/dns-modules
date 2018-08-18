import { GenericDialogueD } from '@dns/toolbox';
export interface ConfirmDialogueState extends GenericDialogueD {
    onConfirm: any;
    open: boolean;
    text: any | null;
    title: any | null;
}
export default function confirmDialogue(state: ConfirmDialogueState, action: any): any;
