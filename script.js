function searchTheory() {
    let search = document.getElementById("searchInput").value.toLowerCase();

    if (search.includes("big")) {
        window.location.href = "bigbang.html";
    } else if (search.includes("evolution")) {
        window.location.href = "evolution.html";
    } else if (search.includes("fermi")) {
        window.location.href = "fermi.html";
    } else {
        alert("Theory not found!");
    }
}
