const addToClipboard = (data: any) => {
  const el = document.createElement('textarea');
  el.value = data;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export default addToClipboard;
