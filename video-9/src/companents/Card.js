import React from 'react';

/*
const Card = (props) => {

	return (
		<div className="card w-100"> 
			<img src={props.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.cardTitle}</h5> 
                <p className="card-text">{props.cardText}</p>
				<p className="card-text">
					<small className="text-muted">{props.updatedTime} </small>
				</p>
			</div>
		</div>
	);
};
*/

class Card extends React.Component {
	render(){
		return (
			<div className="card w-100"> 
				<img src={this.props.image} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{this.componentDidCatchprops.cardTitle}</h5> 
					<p className="card-text">{this.props.cardText}</p>
					<p className="card-text">
						<small className="text-muted">{this.props.updatedTime} </small>
					</p>
				</div>
			</div>
		);
	}

}

Card.defaultProps ={
	cardTitle: "Default Card Title"
}

Card.propTypes = {
	cardText: propTypes.string.isRequired
}

export default Card;

//<div className="card w-100"> = w-100 diyerek genişliğin tamamını al demek için koyuyuruz
/*
.//! propslar için kullanılır - yeni güncellemeyle stateler içinde functionlar kullanılır

function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
  }

.//! state kullanmak için classlar kullanılır -durum demektir state
.//! classlar render edilir - sayfa yenilenmeden güncelleme sağlar 
.//?? classlarda 3 kart var olduğundan dolayı this.props şeklinde kullanılır
class Welcome extends React.Component {
	render() {
	  return <h1>Hello, {this.props.name}</h1>; 
	}
  }*/




  //? aşşağıdaki ifadeyi propslarda veri çağrılamadığında boş olduğunda web sayfamızda varsayılan props oluşturmak için tanımlarız.
// Card.defaultProps = {
// cardTitle: "Default Card Title" }

//?? eklediğimiz verinin veri tipini sınırlandırıyoruz - varklı bir veri tipi girilse sayfada bir hata alınmaz fakat konsolda alınır
// Card.propTypes = {
// 	cardText: PropTypes.array
// }

// isRequired = zorunlu olduğunu ifade ediyoruz


