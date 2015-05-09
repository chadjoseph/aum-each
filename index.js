import {isArray, isObject} from 'aum-utility';

export default function (object, callback) {
  var i;
  var keys;
  var length;

  if (isArray(object)) {
    for (i = 0, length = object.length; i < length; i++) {
      callback(object[i], i, object);
    }
  } else if (isObject(object)) {
    keys = Object.keys(object);

    for (i = 0, length = keys.length; i < length; i++) {
      callback(object[keys[i]], keys[i], object);
    }
  }
}

