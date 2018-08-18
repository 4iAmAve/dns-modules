const getSearchParameterByName = (name: string) => {
  const search = window.location.search;
  const searchArray = search.substring(1).split('&');
  let searchValue = null as any;

  searchArray.map((value: string) => {
    if (value.indexOf(`${name}=`) === 0) {
      searchValue = value.replace(`${name}=`, '');
    }
  });

  return searchValue;
};

export default getSearchParameterByName;
