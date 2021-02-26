let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
};

function createTree(container, tree) {
  container.append(createTreeDOM(tree))
}

function createTreeDOM(tree) {
  if (!Object.keys(tree).length) return; //if no tree children - return, no ul.

  let ul = document.createElement('ul') //create a ul

  for (let key in tree) { //go through each key in the tree
    let li = document.createElement('li') //prepare list el
    li.innerHTML = key; //set <li> [ HERE ] </li> to be the key in the tree ex)trout.

    let childrenUL = createTreeDOM(tree[key]) //recursive - if tree key has children,
    //re-call the method passing the specific key as the 'tree' to go through it.
    if (childrenUL) { //if there are children
      li.append(childrenUL) //then add them to our outer list entry.
    }
    ul.append(li) //add the main list to the main UL structure.
  }
  return ul //when done return the main UL structure.
}

let container = document.getElementById('container') //get the container div from index
//html
createTree(container, data) //call the method that will start the process.

//they get indented because we are making a UL inside of a UL for 
//some of the keys (the ones with children).