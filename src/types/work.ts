export interface Work {
  title: string
  description: string
  tags: string[]
  image?: string
  year: string
  link?: string
  repos?: { label: string; url: string }[]
}
