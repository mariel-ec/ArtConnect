const asyncEvery = async (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (!(await callback(arr[i]))) {
      return false;
    }
  }
  return true;
};

module.exports = { asyncEvery };
