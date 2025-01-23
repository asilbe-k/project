
document.addEventListener("DOMContentLoaded", (e) => {
    let row = document.querySelector(".row");
    phones.forEach(tel => {
        let div = document.createElement("div");
        div.classList.add("col-4", "mt-2");
        div.innerHTML = `
        <div class="card">
            <img src="${tel.rasmi}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${tel.nomi}</h5>
                <p class="card-text">${tel.narxi}$</p>
                <a href="productDetail.html?id=${tel.id}" class="btn btn-primary">Buy</a>
            </div>
        </div>
        `;
        row.append(div);
    });
  
    document.querySelector("#searchInp").addEventListener("keyup", (e) => {
        row.innerHTML = "";
        let inpVal = document.querySelector("#searchInp").value.trim();
        phones.forEach(tel => {
            if (tel.nomi.toLowerCase().includes(inpVal.toLowerCase())) {
                let div = document.createElement("div");
                div.classList.add("col-3", "mt-2");
                div.innerHTML = `
                <div class="card">
                    <img src="${tel.rasmi}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${tel.nomi}</h5>
                        <p class="card-text">${tel.narxi}$</p>
                        <a href="productDetail.html?id=${tel.id}" class="btn btn-primary">Buy</a>
                    </div>
                </div>
                `;
                row.append(div);
            }
        });
    });
  
    let login = localStorage.getItem("login");
    if (login) {
        document.querySelector("#Login2").innerHTML = `
        <b style="color: white">${login}</b>
        <svg xmlns="http://www.w3.org/2000/svg" id="exit" style="color: white; margin-left:15px" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
        </svg>
        `;
  
        let li = document.createElement("li");
        li.classList.add("nav-item");
        li.innerHTML = `
        <a class="navbar-brand" href="./addProduct.html">Add Product</a>
        `;
        document.querySelector("#menuList").append(li);
    }
  
    document.body.addEventListener("click", function(e) {
        if (e.target.closest("#exit")) {
            localStorage.clear();
            location.reload();
        }
    });
  });
  
  
