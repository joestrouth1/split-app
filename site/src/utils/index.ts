export function sanitizeQueryField(field: string | string[] | null) {
  if (Array.isArray(field) || !field) return ''
  return field
}
