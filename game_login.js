function addUser() {
    player1Name = document.getElementById("player1NameInput").value;
    player1Name = document.getElementById("player2NameInput").value;
    localStorage.setItem("player1Name", player2Name);
    localStorage.setItem("player2Name", player1Name);
    window.lovation = "game_page.html";
}