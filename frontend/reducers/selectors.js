export const selectBusiness = ({ businesses }, id) => {
  return businesses[id] ;
};

export const asArray = ({ businesses }) => (
  Object.keys(businesses).map(key => businesses[key])
);
