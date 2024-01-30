export type LenguajeDeProgramacion = {
  id: string, 
  nombre: string;
  nivel: "senior" | "intermedio" | "junior"  
  años: number
  experiencia: "profesional" | "hobby"
  image_url: string;
};

let csharp: LenguajeDeProgramacion = {
  id: "1", 
  nombre: "C#",
  nivel: "senior", 
  años: 18, 
  experiencia: "profesional",
  image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/480px-C_Sharp_Logo_2023.svg.png"
};

let visualBasic6: LenguajeDeProgramacion = {
  id: "2", 
  nombre: "Visual Basic 6",
  nivel: "senior", 
  años: 20, 
  experiencia: "profesional",
  image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/2048px-VB.NET_Logo.svg.png"
};

let php: LenguajeDeProgramacion = {
  id: "3", 
  nombre: "PHP",
  nivel: "junior", 
  años: 2, 
  experiencia: "profesional",
  image_url: "https://banner2.cleanpng.com/20180904/xhu/kisspng-logo-image-computer-icons-php-portable-network-gra-william-davies-meng-mongodb-5b8e9698822d99.0636011515360713205332.jpg"
};

let java: LenguajeDeProgramacion = {
  id: "4", 
  nombre: "Java",
  nivel: "junior", 
  años: 1, 
  experiencia: "profesional",
  image_url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Java_get_powered.jpg"

};

let plsql: LenguajeDeProgramacion = {
  id: "5", 
  nombre: "PL/SQL",
  nivel: "intermedio", 
  años: 4, 
  experiencia: "profesional",
  image_url: "https://assets.codegrip.tech/wp-content/uploads/2021/09/28184216/Pl-Sql_Logo.png"
};

let transactSql: LenguajeDeProgramacion = {
  id: "6", 
  nombre: "Transact-SQL",
  nivel: "senior", 
  años: 10, 
  experiencia: "profesional",
  image_url: "https://assets.codegrip.tech/wp-content/uploads/2021/09/29134427/T-Sql_Logo.png"
};

let python: LenguajeDeProgramacion = {
  id: "7", 
  nombre: "Python",
  nivel: "junior", 
  años: 1, 
  experiencia: "hobby",
  image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtmvJ6J8QQ2pZzsNdRFLpfKw6TQKpa40fi5v-ULWl7Q&s"
};

let javascript: LenguajeDeProgramacion = {
  id: "8", 
  nombre: "JavaScript",
  nivel: "intermedio", 
  años: 2, 
  experiencia: "profesional",
  image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
};

let typescript: LenguajeDeProgramacion = {
  id: "9", 
  nombre: "TypeScript",
  nivel: "intermedio", 
  años: 2, 
  experiencia: "hobby",
  image_url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
};

export const list_lenguages = [
  javascript, typescript, python, csharp, java, php, plsql, transactSql, visualBasic6]