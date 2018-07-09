let name = null

export const setName = (n) => {
  name = n
}

export const setTab = (o) => {
  let n = localStorage.getItem(name)
  if (n) {
    try {
      const t = JSON.parse(n)
      if (t[o.path]) {
        
      } else {

      }
    } catch(e) {

    }
  }
}

export const closeTab = (tabName) => {

}