export default function containVal (obj ?: any[], key?: any, vals ?: any ) {
  let keys = obj.map( (v) => { return v[key]})
  return keys.some(i => vals.includes(i));
}