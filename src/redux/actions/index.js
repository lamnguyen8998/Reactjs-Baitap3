import * as ActionType  from "./../reducers/constants"


const actUserDelete = (user)=>{
    return {
        type: ActionType.DELETE_USER,
        payload: user,
      };
      
};
const actGetUserEdit = (user) =>{
  return{
    type: ActionType.EDIT_USER,
        payload: user,

  }
}

const actGetkeyword = (keyword) =>{
  return{
    type: ActionType.GET_KEYWORD,
        payload: keyword,

  }
}

const actUserSubmit = (user) =>{
  return{
    type: ActionType.ON_SUBMIT,
    payload: user,
  }
        
  

}

export {actUserDelete, actGetUserEdit, actGetkeyword, actUserSubmit };