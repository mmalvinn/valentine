document.querySelector("#cat").addEventListener("click", function () {
    console.log("clicked");
    document.querySelector("#cat-box").classList.add("flower-clicked");
    setTimeout(function () {
        document.querySelector("#cat-box").classList.remove("flower-clicked");
    },600);
    document.querySelector("#cat").classList.add("clicked");
    setTimeout(function () {
        document.querySelector("#cat").classList.remove("clicked");
    },100);
});