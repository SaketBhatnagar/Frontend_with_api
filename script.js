let root = document.getElementById("root");

let data = fetch("https://api.github.com/users")
  .then(data => {
    data.json().then(ex_data => {
      // console.log(ex_data);

      for (value of ex_data) {
        console.log(value.login);
        console.log(value.avatar_url);

        let { avatar_url, login, html_url } = value;

        root.innerHTML += `
            <div class="card">
                <img src=${avatar_url} alt=${value.login}>

                <div class="info">
                <h2> ${login}</h2>
            
                <a href=${html_url}
                target="_blank"
                >Profile</a>
                </div>
            </div>
        `;
      }
    });
  })
  .catch(err => console.log(err));

// console.log(data);

// function createElement() {
//   root.innerHTML += `

//         <article class="item-block">

//           <img src="" >

//         </article>

//   `;
// }
