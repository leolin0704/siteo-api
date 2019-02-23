
import map from 'lodash/map';

export const generateOrderNumber = () => {
  return `O-${new Date().getTime()}${parseInt(Math.random() * 10000)}`;
};

export const mapViewModel = (dbModels, ignoreFields) => {
  if(!(dbModels instanceof Array)) {
    dbModels = [dbModels];
  }
  
  return map(dbModels, dbModel => {

    const newModel = {
      ...dbModel.get({
        plain:true,
      }),
      isDeleted: undefined,
      createBy: undefined,
      createDate: undefined,
      modifyBy: undefined,
      modifyDate: undefined,
    };

    if (ignoreFields) {
      if (typeof ignoreFields === "string"){
        newModel[ignoreFields] = undefined;
      }else if (ignoreFields instanceof Array){
        for(let i =0; i < ignoreFields.length; i++){
          newModel[ignoreFields[i]] = undefined;
        }
      }
    }

    return newModel;
  })
};
