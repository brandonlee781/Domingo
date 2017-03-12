export interface Recipe {
  $key?: string,
  name: string,
  ingredients: Array<string>,
  direction: string,
  serves: number,
  time: {
      prep: number,
      cook: number
  }
}