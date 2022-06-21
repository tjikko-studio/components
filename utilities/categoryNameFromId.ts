export default function categoryNameFromId(id: string): string {
  return id.substring(id.lastIndexOf('categories') + 11)
}
