export default function CheckType<T>(property: keyof T) {
  let _extrict: T;
  try {
    _extrict[property] = 'test' as any;
  } catch {
    console.log(property);
    console.error("Key don't fit on this Type");
  }
}
