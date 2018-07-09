module.exports = {
  
  nroute: (vm) => {
    return {
      Npush: (location) => {
        vm.$router.push(location)
      },
      Nreplace: (location) => {
        vm.$router.push(location)
      },
      Ngo: (n) => {
        vm.$router.go(n)
      },
    }
  }

}