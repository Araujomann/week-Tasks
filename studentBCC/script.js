function enviarForm(){

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const fieldOfStudy = document.getElementById("fieldOfStudy").value;
    const birthYear = parseInt(document.getElementById("birthYear").value);
    const studentId = document.getElementById("studentId").value;

    const mensagem =`
        Primeiro Nome: ${firstName}
        Sobrenome: ${lastName}
        Campo de Estudo: ${fieldOfStudy}
        Ano de Nascimento: ${birthYear}
        Número de Matrícula: ${studentId}
    `;
    alert(mensagem);

    document.getElementById("studentForm").reset();
}
