import { categories } from './categories'

export const products = categories.map((category) => ({
  ...category,
  category: category.name,
}))
