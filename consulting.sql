SELECT FORNECEDOR.NOME_FORNECEDOR, PEÇA.PREÇO
FROM FORNECIMENTO
INNER JOIN FORNECEDOR ON FORNECEDOR.CODIGO_FORNECEDOR = FORNECIMENTO.CODIGO_FORNECEDOR
INNER JOIN PEÇA ON PEÇA.CODIGO_PEÇA = FORNECIMENTO.CODIGO_PEÇA
INNER JOIN CARRO ON CARRO.CODIGO_CARRO = FORNECIMENTO.CODIGO_CARRO
WHERE (FORNECEDOR.CIDADE = 'VITORIA') AND (PEÇA.CODIGO_PEÇA='MOTOR') AND (CARRO.CODIGO_CARRO='KOMBI')

1 - 
CREATE TABLE Employee (
  Employee_ID int NOT NULL PRIMARY KEY,
  "First Name" varchar(255) NOT NULL,
  "Last Name" varchar(255) NOT NULL,
  Department_ID Int NOT NULL REFERENCES Department(Department_ID),
  Type_employee_ID int NOT NULL REFERENCES Type_employee(Type_employee_ID),
  Salary float NOT NULL,
  Site_ID int NOT NULL REFERENCES Site(Site_ID)
  );
CREATE TABLE Employee_management (
  Employee_management_ID int NOT NULL PRIMARY KEY,
  Employee_ID_boss Int NOT NULL REFERENCES Employee(employee_id),
  Employee_ID_subordinate Int NOT NULL REFERENCES Employee(employee_id)
 );

2 - 
SELECT Employee."first name",Employee."last name" 
FROM Employee INNER JOIN Employee_management ON Employee_management.employee_id_subordinate=Employee.employee_id 
WHERE site_id in (SELECT site_id from Site WHERE country_id = 1);

3 -
SELECT Department.Name, SUM(Employee.Salary) 
FROM Employee INNER JOIN Employee_management ON Employee_management.employee_id_subordinate=Employee.employee_id
GROUP BY Country.Name 
ORDER BY SUM(Employee.Salary) DESC;

4 -
SELECT CONCAT(Employee."First Name", ' ', Employee."Last Name") AS "Boss name",
CONCAT(Employee."First Name", ' ', Employee."Last Name") AS "Subordinate name"
FROM Employee
HAVING COUNT(Employee_ID_boss) > 1;

5 -
CREATE TRIGGER SeniorPosition
ON Type_employee
AFTER UPDATE
AS 
BEGIN
SET NOCOUNT ON;
UPDATE Employee.Salary
SET Employee.Salary = Employee.Salary + 15000
FROM Type_employee
INNER JOIN inserted i ON Type_employee.Type_employee_ID=Employee.Type_employee_ID

6 -
CREATE FUNCTION MoveCountry