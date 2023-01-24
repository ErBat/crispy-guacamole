import { defineStore } from 'pinia'
import type Item from '../types/item'
import { setItem, getItem } from "../services/localStorage"
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'

const defaultItems: Item[] = [
  {
    id: 0,
    title: "«Рождение Венеры»",
    author: "Сандро Боттичелли",
    price: "1 000 000 $",
    oldPrice: "2 000 000 $",
    img: img1,
    status : "initial"
  },
  {
    id: 1,
    title: "«Тайная вечеря»",
    author: "Леонардо да Винчи",
    price: "3 000 000 $",
    img: img2,
    status : "initial"
  },
  {
    id: 2,
    title: "«Сотворение Адама»",
    author: "Микеланджело",
    price: "5 000 000 $",
    oldPrice: "6 000 000 $",
    img: img3,
    status : "initial"
  },
  {
    id: 3,
    title: "«Урок анатомии»",
    author: "Рембрандт",
    price: "7 000 000 $",
    oldPrice: "8 000 000 $",
    img: img4,
    status : "sold"
  }
]

const localState: Item[] = getItem("Cart")

const initialState = localState && localState.length ? localState : defaultItems

const updateLocalStorage = (value: Item[]) => {
  setItem("Cart", value)
}

const API_URL = 'https://jsonplaceholder.typicode.com/posts/1'

export const useCartStore = defineStore('cart', {
  state: (): State => {
    return {
      items: initialState
    }
  },
  getters: {
    getItems(state){
      return state.items
    },
    resetItems(state){
      state.items = defaultItems;
      updateLocalStorage(defaultItems)
    }
  },
  actions: {
    async addToCart(id: number) {
      const item = this.items.find(e => e.id === id)
      item && (item.status = "loading")
      try {
        const response = await (await fetch(API_URL)).json()
        item && response && (item.status = "success")
        updateLocalStorage(this.items)
      }
      catch (error) {
        console.log(error)
      }
    },
    removeItem(id: number) {
      const item = this.items.find(e => e.id === id)
      item && (item.status = "initial")
      updateLocalStorage(this.items)
    }
  }
})

interface State {
  items:Item[]
}
