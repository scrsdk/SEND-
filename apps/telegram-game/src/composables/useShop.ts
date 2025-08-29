import type { Product, ProductItem } from '@chat-game/types'
import { useFetch } from '@vueuse/core'

type ProductsWithItems = Product & {
  items: ProductItem[]
}

const { data, execute: refreshShop } = useFetch('https://melvek.ru/api/shop').get().json<ProductsWithItems[]>()

export function useShop() {
  return { products: data, refreshShop }
}
