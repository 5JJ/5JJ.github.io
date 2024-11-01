function isObject(obj: any) {
  return (
    obj !== null &&
    typeof obj === "object" &&
    "constructor" in obj &&
    obj.constructor === Object
  );
}

function extend(target: any = {}, src: any = {}) {
  Object.keys(src).forEach((key) => {
    if (typeof target[key] === "undefined") target[key] = src[key];
    else if (
      isObject(src[key]) &&
      isObject(target[key]) &&
      Object.keys(src[key]).length > 0
    ) {
      extend(target[key], src[key]);
    }
  });
}

export { extend, isObject };
