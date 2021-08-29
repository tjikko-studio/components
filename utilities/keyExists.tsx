export default function keyExists (obj: any, key: string, condition: [key : any, val : any] ): boolean {
  if (obj[condition[0]] && obj[condition[0]] !== condition[1]){
    return false;
  }

  if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
    return false;
  }
  else if (obj.hasOwnProperty(key) && obj[key]) {
    return true;
  }
  else if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      const result = keyExists(obj[i], key, condition);
      if (result) {
        return result;
      }
    }
  }
  else {
    for (const k in obj) {
      const result = keyExists(obj[k], key, condition);
      if (result) {
        return result;
      }
    }
  }
  return false;
}
