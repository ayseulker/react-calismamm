import React from "react";
import ReactDOM from "react-dom";

import Card from "./companents/Card";

const App = () => {

  return (
    <div>

      <div className="card-group">

        <Card  cardTitle="Trabzonspor"/> 
        
        <Card cardTitle="Bursaspor"/> 

        <Card cardTitle="Samsunspor"/>

      </div>

    </div>
  );
}
//<Card  cardTitle="Trabzonspor"/> //! parent içerisinde atribuite oluşturup childda çağıracağız
//! burada bir nesnenin key ve value değerlerini yazdırıyoruz.
ReactDOM.render(
  <App />,
  document.getElementById("root") // document.querySelector("#root")
);


// biz bir şeyi tekrar tekrar yapıyorsak onun daha kısa yolu vardır.yoksa o dil zayıftır.
// Her kardın farklı özellikler içermesi için proplardan yardım alınır ve compenentlar arası iletişim sağlar. 
// index js parent card js child parentta tanımlayıp childda çağırıyoruz