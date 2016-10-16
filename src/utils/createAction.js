export default function(actionType, payload=null) {
  return {
    type: actionType,
    payload
  }
};