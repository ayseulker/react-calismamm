import React from "react";
import ReactDOM from "react-dom";

//! jsx sayesinde oluşturduğumuz elemanları sayfamızda görürüz
//? jsx her elemen için tek tek element çağırmak yerine bir seferde çağrılır.

// const names = ["Arin", "Gamze", "Elis"];

// function App(){
//     return (
//         <div> // bir tane parent içerisine yerleştiririz

//         {names.map(name =>(<h1>{name}</h1>))} //! jsx yazım şekli
//         <h2>Gürcan</h2>
//      </div>
//     );
// //? Eğer h2 divin dışında olsaydı fonksiyon çalışmazdı. 
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById("root") // document.querySelector("#root")
// );
//! class tanımlarken classname şeklinde tanımlanır
function App() {

    //const buttonValue = "Benim Butonum"; //java özelliklerini kullanırken kıvırcık parantez kullanılır.
    const str1 = "Click";
    const str2 = "Me";

    return (
        <div>
        //!<button tabIndex="3" className="jsxClass" type="button" style={{ padding: "10px", color: "white", backgroundColor: "blue", border: "2px solid yellow" }}>{buttonValue}</button>
            <button tabIndex="3" className="jsxClass" type="button" style={{ padding: "10px", color: "white", backgroundColor: "blue", border: "2px solid yellow" }}>{str1.concat(str2)}</button>
        //!<button tabindex="3" class="htmlClass" type="button" style="padding: 10px; color: white; background-color: red; border: 2px solid yellow;"> HTML BUTTON</button>
        //!jsx dosyalarında css i html deki gibi atayamıyoruz, jsx te çift süslü parantez içerisine ekliyoruz
        </div>
    );
    //? Eğer h2 divin dışında olsaydı fonksiyon çalışmazdı. 
}

//! jsx ile html arasındaki farklar
// 1- 1 div içerisine yazılır tüm elemalar
// 2- stil özelliklerini yazarken farklı yazım şekilleri kullanıyoruz
// 3- html atribuetlerde farklı isimler yazım türleri kullanıyoruz. 
// 4- jsx üzerine js özelliklerini gömebiliriz

ReactDOM.render(
    <App />,
    document.getElementById("root") // document.querySelector("#root")
);


