module.exports = (porductList, filterKey, filterValue) => {
  return porductList.filter((el) => {
    if (filterKey === 'category') return el[filterKey] === filterValue;
    if (filterKey === 'price') return el[filterKey] <= filterValue;
  });
};
