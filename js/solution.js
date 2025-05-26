document.addEventListener("DOMContentLoaded", function () {
    function toggleSolution(id) {
        const solution = document.getElementById(id);
        if (solution.style.display === "none" || solution.style.display === "") {
            solution.style.display = "block";
        } else {
            solution.style.display = "none";
        }
    }

    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function () {
            const solutionId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            toggleSolution(solutionId);
        });
    });
});