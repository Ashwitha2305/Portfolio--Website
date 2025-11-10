function validateForm() {
    const email = document.getElementById("email").value;

    if (!email.includes("@")) {
        alert("Invalid email!");
        return false;
    }
    alert("Submitted!");
    return true;
}
