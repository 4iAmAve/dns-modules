## @dns/store-modules

A redux store connectable modules library for react 

Simply put, wrapper which connect themselves to the redux store with provided actions 

### Setup

```shell
yarn
```

### Build

For building everything

```shell
yarn build
```

### Available Modules, Reducer and Actions

Modules: 


```javascript
export {
  Dialogue,
  Drawer,
  NotificationBar,
  Popover
}
```

Reducers/ReducerStates (for typescript): 

```javascript
export {
  confirmDialogue,
  ConfirmDialogueState,
  
  dialogues,
  DialoguesState,
  
  drawers,
  DrawersState,
  
  notifications,
  NotificationsState,
  
  popover,
  PopoverState
}
```

Actions: 

```javascript
export {
  confirmDialogueActions,
  confirmDialogueAction,
  
  dialoguesActions,
  dialoguesAction,
  
  drawerActions,
  drawerAction,
  
  notificationAction,
  notificationActions,
  addNotification,
  
  popoverAction,
  popoverActions,
}
```

### NOTE

In case of style adjustments use SASS/SCSS. This will be compiled to CSS in the build step and as such added to the lib.

### License

@dns/store-modules is [MIT licensed](./LICENSE).
