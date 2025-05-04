1.
class Marker {
    constructor(c, p) {
      this.c = c;
      this.p = p;
    }
    get markerProps() {
      return [this.c, this.p];
    }

    set markerProps(newProps) {
      [this.c, this.p] = [...newProps];
    }

    print(line) {
      let t = document.getElementById("content");
      for (let i = 0; i < line.length; i++) {
        if (this.p != 0) {
          if (line[i] == " ") {
            this.p += 0.5;
          }
          t.innerHTML += line[i];
          t.style.color = this.c;
          this.p -= 0.5;
        } else {
          document.write("маркер кончился 3:");
          break;
        }
      }
    }
}

class FilledMarker extends Marker {
    fill(p) {
        if (p > 100) {
            p = 100;
        }

        else {
            this.p += p;
        }
    }
}

let marker = new FilledMarker("#838", 10);
marker.fill(31);
document.body.setAttribute("style", "font-size: 18px; text-align: center;");

2.
class ExtendedDate extends Date {
    toTextString() {
        const months = [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ];
        const day = this.getDate();
        const month = months[this.getMonth()];
        return `${day} ${month}`;
    }

    isFutureOrPresent() {
        const now = new Date();
        return this >= now;
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    getNextDate() {
        const nextDate = new ExtendedDate(this);
        nextDate.setDate(this.getDate() + 1);
        return nextDate;
    }
}

const extendedDate = new ExtendedDate(2025, 5, 5);


3.
const mainDiv = document.getElementById("content");

const tableDiv = document.createElement("div");
tableDiv.setAttribute("id", "content__tableDiv");
tableDiv.className = "content__tableDiv";

const tableTag = document.createElement("table");
tableTag.setAttribute("id", "content__table");
tableTag.className = "content__table";

tableDiv.append(tableTag);
mainDiv.append(tableDiv);

class Employee {
  constructor(name, position, department, salary) {
    this.name = name;
    this.position = position;
    this.department = department;
    this.salary = salary;
  }
}
const arrEmp = [
  new Employee("John Doe", "Manager", "Sales", 5000),
  new Employee("Bill Freeman", "Manager", "Sales", 5000),
  new Employee("Uno Dirck", "Manager", "Sales", 5000),
  new Employee("Erick Rapid", "Manager", "Sales", 5000),
  new Employee("Chris Rea", "Manager", "Sales", 5000),
  new Employee("Tommy Lee", "Manager", "Sales", 5000),
  new Employee("Jeck Ward", "DevOps Engineer", "DevOps", 3500),
  new Employee("Rick Depper", "Senior Developer", "Desktop Solutions", 4000),
  new Employee("Neo Matrix", "Team Lead", "Desktop Solutions", 5000),
  new Employee("Trinity Matrix", "Senior Developer", "Desktop Solutions", 4000),
  new Employee("Rick Grouy", "Junior Developer", "Desktop Solutions", 1000),
  new Employee("George McCalister", "Junior Developer", "Desktop Solutions", 1000),
  new Employee("Fred Durst", "Junior Developer", "Desktop Solutions", 1000),
  new Employee("Somebody Who", "Senior Developer", "Desktop Solutions", 4000),
  new Employee("Merlin Mysterier", "Middle Developer", "Desktop Solutions", 4000),
  new Employee("Harry Potter", "Senior Developer", "Desktop Solutions", 4000),
  new Employee("Norton Commander", "Middle Developer", "Desktop Solutions", 4000),
  new Employee("Elon Musk", "Senior Developer", "Desktop Solutions", 4000)
];

class EmpTable {
  constructor(arr) {
    this.arr = arr;
  }

  getHtml() {
    const table = document.getElementById("content__table");
    const array = this.arr;
    const head = document.createElement("tr");
    head.setAttribute("style", "font-size: 18px;");
    const th1 = document.createElement("th");
    th1.textContent = "Name";
    const th2 = document.createElement("th");
    th2.textContent = "Position";
    const th3 = document.createElement("th");
    th3.textContent = "Department";
    const th4 = document.createElement("th");
    th4.textContent = "Salary ($)";
    head.append(th1);
    head.append(th2);
    head.append(th3);
    head.append(th4);
    table.append(head);
    for (let i in array) {
      let tr = document.createElement("tr");
      table.append(tr);
      for (let j in array[i]) {
        let td = document.createElement("td");
        td.textContent = array[i][j];
        tr.append(td);
        td.setAttribute("style", "padding: 5px 10px; font-size: 18px;");
      }
    }

    table.setAttribute("border", "2");
    table.setAttribute("bordercolor", "brown");
    table.setAttribute("width", "60%");
    table.setAttribute("style", "margin: auto; background-color: lightgrey;");
  }
}

const tableObj = new EmpTable(arrEmp);
tableObj.getHtml();

4.
class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let html = '<table border="1">';
    html += '<thead><tr><th>ID</th><th>Имя</th><th>Должность</th></tr></thead>';
    html += '<tbody>';
    this.employees.forEach(employee => {
      html += `<tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.position}</td>
      </tr>`;
    });

    html += '</tbody></table>';
    return html;
  }
}

class StyledEmpTable extends EmpTable {
  getStyles() {
    return `
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          font-family: Arial, sans-serif;
        }
        th, td {
          padding: 12px;
          text-align: left;
          border: 1px solid #ddd;
        }
        th {
          background-color: #4CAF50;
          color: white;
        }
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        tr:hover {
          background-color: #ddd;
        }
      </style>
    `;
  }

  getHtml() {
    const parentHtml = super.getHtml();
    const styles = this.getStyles();
    return styles + parentHtml;
  }
}