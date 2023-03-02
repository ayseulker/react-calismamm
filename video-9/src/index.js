import React from "react";
import ReactDOM from "react-dom";

import Card from "./companents/Card";
import Collapse from "./companents/Collapse";

const App = () => {

    return (
        <div className="container">

            <div className="row">

                <div className="card-group w-100">

                    <div className="col">

                        <Collapse href="collapseExample1">
                            <Card
                                
                                cardText="Lorem Ipsum Text 1"
                                updatedTime="Last Updated 1 min ago"
                                image="https://picsum.photos/id/1/200/300" />
                        </Collapse>
                    </div>

                    <div className="col">

                        <Collapse href="collapseExample2">
                            <Card
                                cardTitle="Card Title II"
                                cardText="Lorem Ipsum Text 2"
                                updatedTime="Last Updated 2 min ago"
                                image="https://picsum.photos/id/2/200/300" />
                        </Collapse>

                    </div>

                    <div className="col">

                        <Collapse href="collapseExample3">
                            <Card
                                cardTitle="Card Title III"
                                cardText="Lorem Ipsum Text 3"
                                updatedTime="Last Updated 3 min ago"
                                image="https://picsum.photos/id/3/200/300" />
                        </Collapse>

                    </div>
                </div>
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


//<div className="card-group w-100"> = w-100 diyerek genişliğin tamamını al demek için koyuyuruz