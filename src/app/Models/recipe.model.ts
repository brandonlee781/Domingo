export interface Recipe {
  name: string,
  ingredients: Array<string>,
  direction: string,
  serves: number,
  time: {
      prep: number,
      cook: number
  }
}