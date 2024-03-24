// Write your solution here!
cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  })


  function destructivelyAppendCat(name) {
    cats.push(name)
    name = "Ralph"
  }


  function destructivelyPrependCat(name){
    cats.unshift(name)
    name = "Bob"
  }

  function destructivelyRemoveLastCat(){
    cats.pop()
  }

  function destructivelyRemoveFirstCat(){
    cats.shift()
  }

  function appendCat(name){
    name = [...cats,name]
    name = "Broom"
  }

  function prependCat(name){
    name = [name,...cats]
    name = "Arnold"
  }

  function removeLastCat(){
    cats.slice(-1,-2)
  }

  function removeFirstCat(){
    cats.slice(0,1)
  }

  