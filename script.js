class Employee {
  constructor(id, name, position, salary) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = Array.isArray(employees) ? employees : [];
  }

  getHtml() {
    let html = '<table border="1" cellpadding="6" cellspacing="0">';
    html += "<thead><tr>";
    html += "<th>ID</th><th>Імʼя</th><th>Посада</th><th>Зарплата</th>";
    html += "</tr></thead>";

    html += "<tbody>";
    for (const emp of this.employees) {
      html += "<tr>";
      html += `<td>${emp.id}</td>`;
      html += `<td>${emp.name}</td>`;
      html += `<td>${emp.position}</td>`;
      html += `<td>${Number(emp.salary).toLocaleString("uk-UA", { style: "currency", currency: "UAH",})}</td>`;
      html += "</tr>";
    }
    html += "</tbody></table>";

    return html;
  }
}

const employees = [
  new Employee(1, "Олена Іванова", "Касир", 8000),
  new Employee(2, "Петро Коваленко", "Менеджер", 12000),
  new Employee(3, "Марія Петренко", "Аналітик", 15000),
];

const empTable = new EmpTable(employees);

const root = document.getElementById("table-root") || document.body;
root.innerHTML = empTable.getHtml();