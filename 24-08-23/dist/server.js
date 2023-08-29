class Car {
  constructor() {
    this.id = 1;
    this.arrayCar = [];
    this.editID = null;
  }

  save() {
    let car = this.readData();
    if (this.validateFields(car));
    if (this.editID == null) {
      this.toAdd(car);
    } else {
      this.update(this.editID, car);
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
      imgEdit.setAttribute(
        "onclick",
        "car.edit(" + JSON.stringify(this.arrayCar[i]) + ")"
      );

      let imgDelete = document.createElement("img");
      imgDelete.src = "../img/delete.png";
      imgDelete.setAttribute(
        "onclick",
        "car.delete(" + this.arrayCar[i].id + ")"
      );

      // <td><img></td>
      td_actions.appendChild(imgEdit);
      td_actions.appendChild(imgDelete);

      console.log(this.arrayCar);
    }
  }

  toAdd(car) {
    car.price = parseFloat(car.price);
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

    document.getElementById("update").innerText = "Salvar";
    this.editID = null;
  }

  delete(id) {
    if (confirm("Você deseja excluir o carro cadastrado do ID " + id)) {
    }
    let tbody = document.getElementById("tbody");

    for (let i = 0; i < this.arrayCar.length; i++) {
      if (this.arrayCar[i].id == id) {
        this.arrayCar.splice(i, 1);
        tbody.deleteRow(i);
      }
    }
  }

  edit(data) {
    this.editID = data.id;

    document.getElementById("car").value = data.nameCar;
    document.getElementById("price").value = data.price;
    document.getElementById("update").innerText = "Atualizar";
  }

  update(id, car) {
    for (let i = 0; i < this.arrayCar.length; i++) {
      if (this.arrayCar[i].id == id) {
        this.arrayCar[i].nameCar = car.nameCar;
        this.arrayCar[i].price = car.price;
      }
    }
  }
}

let car = new Car();
