class HTMLUI {
  showResult(info, price) {
    let ring = info.ring,
      color = info.color,
      insur = info.insurance;

    switch (color) {
      case "1":
        color = "white";
        break;
      case "2":
        color = "black";
        break;
      case "3":
        color = "red ";
        break;
      case "4":
        color = "blue";
        break;
    }

    if (ring === "1") {
      ring = "Sport";
    } else {
      ring = "Normal";
    }

    if (insur === "1") {
      insur = "insurancing 100%";
    } else {
      insur = "Simple insurance";
    }
    let result = document.querySelector("#result");

    let div = document.createElement("div");
    div.classList = "divp";
    div.innerHTML = `
             <header class='header'>SUMMARY OF THE INVOICE</header>
             <p>Tire type: ${ring}</p>
             <h4>Color type: ${color}</h4>
             <h5>Type of insurance: ${insur}</h5>
             <p class='total'>Total calculation: ${price}$</p>

             `;

    let spin = document.querySelector("#loading img");
    spin.style.display = "block";

    setTimeout(() => {
      spin.style.display = "none";
      result.appendChild(div);
    }, 3000);
  }

  addformObj(Product) {
    let idd = document.querySelector(".button1");

    obj = {
      ring: Product.querySelector(".divp p").textContent,
      color: Product.querySelector(".divp h4").textContent,
      insur: Product.querySelector(".divp h5").textContent,
      id: idd.getAttribute("date-id"),
    };
  }

  addinCart(inner) {
    shoppingCart = document.querySelector(".clear1 div");
    let row = document.createElement("ul");

    row.innerHTML = `
            
                <ul class='ul'>
                <li>---BENZ---</li>
                <li>${inner.ring}</li>
                <li>${inner.color} </li>
                <li>  ${inner.insur}</li>
                <div> <a class="remove" data-id='${inner.id}' > X </a><a class="buy" > Buy </a></div>
                </ul>
            
                `;
    shoppingCart.appendChild(row);
  }
}
class HTMLUI2 {
  showResult(info, price) {
    let ring = info.ring,
      color = info.color,
      insur = info.insurance;

    switch (color) {
      case "1":
        color = "white";
        break;
      case "2":
        color = "black";
        break;
      case "3":
        color = "red ";
        break;
      case "4":
        color = "blue";
        break;
    }

    if (ring === "1") {
      ring = "Sport";
    } else {
      ring = "Normal";
    }

    if (insur === "1") {
      insur = "insurancing 100%";
    } else {
      insur = "Simple insurance";
    }
    let result = document.querySelector("#result2");
    let div = document.createElement("div");
    div.classList = "divp2";
    div.innerHTML = `
             <header class='header'>SUMMARY OF THE INVOICE</header>
             <p>Tire type: ${ring}</p>
             <h4>Color type: ${color}</h4>
             <h5>Type of insurance: ${insur}</h5>
             <p class='total'>Total calculation: ${price}$</p>

             `;

    let spin = document.querySelector("#loading2 img");
    spin.style.display = "block";

    setTimeout(() => {
      spin.style.display = "none";
      result.appendChild(div);
    }, 3000);
  }
  addformObj(Product) {
    let idd = document.querySelector(".button1");

    obj = {
      ring: Product.querySelector(".divp2 p").textContent,
      color: Product.querySelector(".divp2 h4").textContent,
      insur: Product.querySelector(".divp2 h5").textContent,
      id: idd.getAttribute("date-id"),
    };
  }

  addinCart(inner) {
    shoppingCart = document.querySelector(".clear1 div");
    let row = document.createElement("ul");

    row.innerHTML = `
    
        <ul class='ul'>
        <li>---BMW---</li>

        <li>${inner.ring}</li>
        <li>${inner.color} </li>
        <li>  ${inner.insur}</li>
        <div> <a class="remove" data-id='${inner.id}' > X </a><a class="buy" > Buy </a></div>
 
   
        </ul>
       
    
        `;
    shoppingCart.appendChild(row);
  }
}
class HTMLUI3 {
  showResult(info, price) {
    let ring = info.ring,
      color = info.color,
      insur = info.insurance;

    switch (color) {
      case "1":
        color = "white";
        break;
      case "2":
        color = "black";
        break;
      case "3":
        color = "red ";
        break;
      case "4":
        color = "blue";
        break;
    }

    if (ring === "1") {
      ring = "Sport";
    } else {
      ring = "Normal";
    }

    if (insur === "1") {
      insur = "insurancing 100%";
    } else {
      insur = "Simple insurance";
    }
    let result = document.querySelector("#result3");
    let div = document.createElement("div");
    div.classList = "divp3";
    div.innerHTML = `
             <header class='header'>SUMMARY OF THE INVOICE</header>
             <p>Tire type: ${ring}</p>
             <h4>Color type: ${color}</h4>
             <h5>Type of insurance: ${insur}</h5>
             <p class='total'>Total calculation: ${price}$</p>

             `;

    let spin = document.querySelector("#loading3 img");
    spin.style.display = "block";

    setTimeout(() => {
      spin.style.display = "none";
      result.appendChild(div);
    }, 3000);
  }

  addformObj(Product) {
    let idd = document.querySelector(".button1");

    obj = {
      ring: Product.querySelector(".divp3 p").textContent,
      color: Product.querySelector(".divp3 h4").textContent,
      insur: Product.querySelector(".divp3 h5").textContent,
      id: idd.getAttribute("date-id"),
    };
  }

  addinCart(inner) {
    shoppingCart = document.querySelector(".clear1 div");
    let row = document.createElement("ul");

    row.innerHTML = `
    
        <ul class='ul'>
        <li>---PORSCHE---</li>

        <li>${inner.ring}</li>
        <li>${inner.color} </li>
        <li>  ${inner.insur}</li>
        <div> <a class="remove" data-id='${inner.id}' > X </a><a class="buy" > Buy </a></div>
        </ul>
    
        `;
    shoppingCart.appendChild(row);
  }
}
let obj;

class Shop {
  constructor(ring, color, insurance) {
    (this.ring = ring), (this.color = color), (this.insurance = insurance);
  }

  calculatePrice(info) {
    let price, base;
    base = 20000;

    let ring = info.ring;
    let color = info.color;
    let insur = info.insurance;

    if (ring === "1") {
      price = base *= 1.4;
    } else {
      price = base *= 1;
    }

    switch (color) {
      case "1":
        price = price *= 1.2;
        break;
      case "2":
        price = price *= 1.8;
        break;
      case "3":
        price = price *= 1;
        break;
      case "4":
        price = price *= 1.4;
        break;
    }

    if (insur === "1") {
      price = price *= 1.4;
    } else {
      price = price *= 1.2;
    }

    return price;
  }

  displayError(err) {
    let div = document.createElement("div");
    div.classList = "error";
    div.innerText = err;

    form1.insertBefore(div, document.querySelector("#result"));

    setTimeout(() => {
      
      div.remove();
    }, 3000);
  }
}
class Shop2 extends Shop {
  constructor(ring, color, insurance) {
    super(ring, color, insurance);
    (this.ring = ring), (this.color = color), (this.insurance = insurance);
  }

  displayError(err) {
    let div = document.createElement("div");
    div.classList = "error2";
    div.innerText = err;

    form2.insertBefore(div, document.querySelector("#result2"));

    setTimeout(() => {
      div.remove();
    }, 3000);
  }
}
class Shop3 extends Shop {
  constructor(ring, color, insurance) {
    super(ring, color, insurance);
    (this.ring = ring), (this.color = color), (this.insurance = insurance);
  }
  displayError(err) {
    let div = document.createElement("div");
    div.classList = "error3";
    div.innerText = err;

    form3.insertBefore(div, document.querySelector("#result3"));

    setTimeout(() => {
      div.remove();
    }, 3000);
  }
}

let htmlui = new HTMLUI();
let htmlui2 = new HTMLUI2();
let htmlui3 = new HTMLUI3();
let html = new Shop();
let html2 = new Shop2();
let html3 = new Shop3();

let form1 = document.querySelector("#form1");
let form2 = document.querySelector("#form2");
let form3 = document.querySelector("#form3");

let shoping = document.querySelector(".add-to-cart");
let shoping2 = document.querySelector(".add-to-cart2");
let shoping3 = document.querySelector(".add-to-cart3");

let shoppingCart = document.querySelector(".clear1");
let ccc = document.querySelector(".button11");

let hum=document.querySelector('.hambur')
let uls= document.querySelector('.main-menu')
let hed=document.querySelector('.container')
let crt=document.createElement('div')
hum.addEventListener('click' , function(){
  let ul=document.querySelector('.main-menu')
  ul.style.display='block'

  crt.classList='create'
  hed.appendChild(crt)
  // crt.style.display='block'
 
})

crt.addEventListener('click', function(){
  let ul=document.querySelector('.main-menu')
  ul.style.display='none'
  crt.remove()
   
})

ccc.addEventListener("click", function (e) {
  e.target.nextElementSibling.firstElementChild.firstElementChild.remove();
});

shoppingCart.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});

shoping.addEventListener("click", function (e) {
  e.preventDefault();

  let d = document.querySelector(".divp");
  if (d === null) {
    html.displayError("Please Selected Field");
  } else {
    let product = e.target.parentElement.firstElementChild;
    e.preventDefault();

    htmlui.addformObj(product);
    htmlui.addinCart(obj);
  }
});
shoping2.addEventListener("click", function (e) {
  e.preventDefault();

  let d = document.querySelector(".divp2");
  if (d === null) {
    html2.displayError("Please Selected Field");
  } else {
    let product = e.target.parentElement.firstElementChild;
    e.preventDefault();

    htmlui2.addformObj(product);
    htmlui2.addinCart(obj);
  }
});
shoping3.addEventListener("click", function (e) {
  e.preventDefault();

  let d = document.querySelector(".divp3");
  if (d === null) {
    html3.displayError("Please Selected Field");
  } else {
    let product = e.target.parentElement.firstElementChild;
    e.preventDefault();

    htmlui3.addformObj(product);
    htmlui3.addinCart(obj);
  }
});

form1.addEventListener("submit", function (e) {
  e.preventDefault();
  let ring = document.querySelector("#ring").value;
  let color = document.querySelector("#color").value;
  let insurance = document.querySelector("#insurance").value;

  if (ring === "" || color === "" || insurance === "") {
    html.displayError("Please Selected Field");
  } else {
    let rdiv = document.querySelector("#result div");

    if (rdiv !== null) {
      rdiv.remove();
    } else {
      let insure = new Shop(ring, color, insurance);
      let price = insure.calculatePrice(insure);
      htmlui.showResult(insure, price);
    }
  }
});

form2.addEventListener("submit", function (e) {
  e.preventDefault();
  let ring = document.querySelector("#ring2").value;
  let color = document.querySelector("#color2").value;
  let insurance = document.querySelector("#insurance2").value;

  if (ring === "" || color === "" || insurance === "") {
    html2.displayError("Please Selected Field");
  } else {
    let rdiv = document.querySelector("#result2 div");

    if (rdiv !== null) {
      rdiv.remove();
    }
    let insure = new Shop2(ring, color, insurance);
    let price = insure.calculatePrice(insure);
    htmlui2.showResult(insure, price);
  }
});

form3.addEventListener("submit", function (e) {
  e.preventDefault();
  let ring = document.querySelector("#ring3").value;
  let color = document.querySelector("#color3").value;
  let insurance = document.querySelector("#insurance3").value;

  if (ring === "" || color === "" || insurance === "") {
    html3.displayError("Please Selected Field");
  } else {
    let rdiv = document.querySelector("#result3 div");

    if (rdiv !== null) {
      rdiv.remove();
    }
    let insure = new Shop3(ring, color, insurance);
    let price = insure.calculatePrice(insure);
    htmlui3.showResult(insure, price);
  }
});
