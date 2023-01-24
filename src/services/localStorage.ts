export const isBrowser = () => typeof window !== "undefined"

export const getItem = (name: string) =>
  isBrowser() && window.localStorage.getItem(name)
    ? JSON.parse(window.localStorage.getItem(name) || '')
    : {};

export const setItem = (name: string, value: object) =>
  window.localStorage.setItem(name, JSON.stringify(value))