
fetch("students.json")
.then(response => response.json())
.then(data => {
    document.getElementById("name").textContent = data.name;
    document.getElementById("course").textContent = data.course;
    document.getElementById("year").textContent = data.year;
    document.getElementById("id").textContent = data.id;

    let list = document.getElementById("subjects");

    data.subjects.forEach(subject => {
        let item = document.createElement("li");
        item.textContent = subject;
        list.appendChild(item);
    });
})
.catch(error => console.log(error));

document.getElementById("registrationForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("name").textContent =
        document.getElementById("studentName").value;

    document.getElementById("course").textContent =
        document.getElementById("studentCourse").value;

    document.getElementById("year").textContent =
        document.getElementById("studentYear").value;

    document.getElementById("id").textContent =
        document.getElementById("studentID").value;

    document.getElementById("message").textContent =
        "Registration Successful!";

    this.reset();
});
