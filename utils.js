function to(promise) {
    if (Array.isArray(promise)) {
        return Promise.all(promise).then(array => {
            return [null, ...array];
        }).catch(err => {
            return [err]
        });
    } else {
        return promise.then(data => {
            return [null, data];
        }).catch(err => {
            return [err]
        });
    }
}

function filterParameters(params, paramNameArr){
    let result = {}
    for (const key in params) {
        if (paramNameArr.includes(key)) {
            result[key] = params[key]
        }
    }
    return result
}

const log = (msg, type) => {
    if (!msg) {
      return;
    }
  
    type = type || 'log';
  
    let f;
  
    switch (type) {
      case 'log':
        f = console.log; // eslint-disable-line
        break;
      case 'warn':
        f = console.warn; // eslint-disable-line
        break;
      case 'error':
        f = console.error; // eslint-disable-line
        break;
      default:
        f = console.log; // eslint-disable-line
        break;
    }
  
    f(type + ':', msg);
  
  };

module.exports = {
    to,
    log,
    filterParameters
}