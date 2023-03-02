import React from "react";
import ReactDOM from "react-dom";

import Card from "./companents/Card";
import Collapse from "./companents/Collapse";

const App = () => {

    return (
        <div>

            <div className="card-group">

                <Collapse href="collapseExample1">
                    butona basıldı
                </Collapse>
                <Collapse href="collapseExample2">
                    <Card
                        cardTitle="Card Title II"
                        cardText="Lorem Ipsum Text 2"
                        updatedTime="Last Updated 2 min ago"
                        image="https://picsum.photos/id/10/200/300" />
                </Collapse>
                
                    <Card
                        cardTitle="Card Title III"
                        cardText="Lorem Ipsum Text 3"
                        updatedTime="Last Updated 3 min ago"
                        image="https://picsum.photos/id/100/200/300" />
               
            </div>

        </div>
    );
}

//todo Collapse href=""> //? bu tanımlanarak her cardın ayrı çalışması sğlanıyor.
//! yeni props statüleri atadık ve onları childda çağırıyoruz.
//! companentları iç içe ekleyebiliriz propslarla birlikte
//! companent içerisinde companenti çağırmak için 

//? collapse içeriğindeki içerikler değişrtirildiğinde buttonların özellikleri değişir.

ReactDOM.render(
    <App />,
    document.getElementById("root") // document.querySelector("#root")
);


