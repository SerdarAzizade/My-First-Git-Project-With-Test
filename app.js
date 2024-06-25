document.addEventListener("click", (e) => {
     let i = document.querySelector("i");
     let input = document.getElementById("password");

     if (e.target.classList == "bi bi-eye-slash-fill") {
          if (input.type === "password") {
               input.type = "text";
               i.classList = "bi bi-eye-fill"
          }
     }
     else if (e.target.classList == "bi bi-eye-fill") {
          if (input.type === "text") {
               input.type = "password";
               i.classList = "bi bi-eye-slash-fill"
          }
     }

})