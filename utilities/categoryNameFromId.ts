export default function categoryNameFromId(id: string): string {
  return id.substring(id.lastIndexOf('/') + 1)
}
