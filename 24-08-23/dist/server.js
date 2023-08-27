class Car {
  constructor() {
    this.id = 1;
    this.arrayCar = [];
  }

  save() {
    let car = this.readData();
    if (this.validateFields(car));
    {
      this.toAdd(car);
      /* alert("- Parabéns! \n Operação realizada com sucesso!"); */
    }

    this.listTable();
    this.clearFields();
  }

  listTable() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    for (let i = 0; i < this.arrayCar.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_nameCar = tr.insertCell();
      let td_price = tr.insertCell();
      let td_actions = tr.insertCell();

      td_id.innerText = this.arrayCar[i].id;
      td_nameCar.innerText = this.arrayCar[i].nameCar;
      td_price.innerText = this.arrayCar[i].price;

      td_id.classList.add("center");
      td_actions.classList.add("center");

      let imgEdit = document.createElement("img");
      imgEdit.src = "../img/edit.png";

      let imgDelete = document.createElement("img");
      imgDelete.src = "../img/delete.png";

      // <td><img></td>
      td_actions.appendChild(imgEdit);
      td_actions.appendChild(imgDelete);
    }
  }

  toAdd(car) {
    this.arrayCar.push(car);
    this.id++;
  }

  readData() {
    let car = {};
    car.id = this.id;
    car.nameCar = document.getElementById("car").value;
    car.price = document.getElementById("price").value;

    return car;
  }

  validateFields(car) {
    let msg = "";

    if (car.nameCar == "") {
      msg += "- Informe o nome do Carro\n";
    }
    if (car.price == "") {
      msg += "- Informe o valor do Carro\n";
    }
    if (msg != "") {
      alert(msg);
      return false;
    }
    return true;
  }

  clearFields() {
    document.getElementById("car").value = "";
    document.getElementById("price").value = "";
  }
}

let car = new Car();
