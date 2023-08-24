export type Comment = {
  id?: number
  rating: number
  text: string
}

export type Film = {
  id: number,
  name: string,
  desc: string,
  genre: string[],
  year: number,
  author: string,
  buget: number,
  photo: string
  rating: number
  comment: Comment[]
}
