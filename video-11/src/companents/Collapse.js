/*
*ilk constructor çalışır daha sonra
*staten ilk durumu belirlenir sonra r
*ender metodu ilk defa çalışır
*onclick eventi çalıştırılarak 
*showMore metodu çalıştırılır.
*set state nesnesini güncelledi 
*render metodunu tekrar çalıştırdı
*render metodu güncel jsx i sayfada gösterdi 
**/
import React from 'react';

//! react özellikleri collapse companenta tanımlamak için class Collapse extends React.Component şeklinde yazılır

/*

class Collapse extends React.Component {
    
    constructor(){
        super();

        this.state = {
            showContent : "test content"
        }
    }

    render(){
       
        return (
            <div>
                <a className='btn btn-primary w-100' data-toggle="collapse" href={"#".concat(this.props.href)} role="button" aria-expanded="false" aria-controls='collapseExample'>
                Link with href
                </a>
                <div className='collapse show' id={this.props.href}>
                {this.props.children}
                {this.state.showContent}
                </div>
            </div>
        );
    }
   
};



*/

class Collapse extends React.Component {

    constructor() {
        super();

        this.state = {
            showContent: false
        }

        /*
           this.showMore = () => {
              console.log(this)
           } 
           */


       /** this.showMore = this.showMore.bind(this)  */

    }
/* 
    showMore() {
        this.setState({ showContent: true })
    }
     showmore constructor içinde tanımlanmadığı için this algılanamıyor ve onclick evente tanımlanamadı çıktısı alınıyor
    constructora metodları yazmak kod okumasını zorlaştırır o yüzden her seferinde metodun construct
     .//! bizim amacımız kendi oluşturduğumuz class metodunun componenta ait olan nesneye ulaşması isteniyor. bind kullanılarak problem ortadan kalkıyor
        .//? this.showMore = this.showMore.bind(this) şeklinde hata ortadan kalkar ve onclick eventi çalışmaya başlar. fakat showmore içerisine showContent true olarak kaydedildiği için butona basıldığında sadece açılır tekrar kapanmaz.
     */


    showMore = () => {
        this.setState({ showContent: this.state.showContent })
    }
//! arrow function kullanarak metot oluşturduğumuzda collapse compenenti ile  direk bağlantı sağlanıyor.
// setState metodu kullanılıyor çünkü bu metot kullanıldıktan sonra sayfa render  ediliyor. kullanılmazsa sayfa render edilmez    

render() {

        return (
            <div>
                <a className='btn btn-primary w-100' onClick={this.showMore} >
                    Link with href
                </a>

                {
                    this.state.showContent ? (
                        <div className='collapse show'>
                            {this.props.children}

                        </div>
                    ) : null
                }


            </div>
        );
    }

};


export default Collapse;

//! bir component oluşturulduğunda state in ilk değer veriye sahip olması gerekiyor.

//? construtor içerisine state de kullanılacak ilk depğer oluşturulur

//propsları değiştirilemeyen veriler için gönderirken state leri değiştirilebilir veriler için kullanılır


// {this.props.children} = prop çağırma yöntemi
// {this.state.showContent} = state çağırma yöntemi


/*
<a className='btn btn-primary w-100' data-toggle="collapse" href={"#".concat(this.props.href)} role="button" aria-expanded="false" aria-controls='collapseExample'>
    * boostrap hazır kodlarıyla kartların  açık olup olmayacağına karar veiyoruz
*/


/*
{
    this.state.showContent ? (
        <div className='collapse show'>
        {this.props.children}
    
       </div>
    ) : null   
}  * if döngüsü kurup  this.state = {
    showContent : false
} **durumuna göre  kartlar açık veya kapalı olacağı ayarlanacak

*/