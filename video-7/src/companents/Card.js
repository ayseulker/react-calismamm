import React from 'react';

const Card = (props) => {
    console.log(props) // obje şeklide çıktı alınır
	return (
		<div className="card">
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.cardTitle}</h5> 
                <p className="card-text">Deneme Component</p>
				<p className="card-text">
					<small className="text-muted">Last updated 4 mins ago</small>
				</p>
			</div>
		</div>
	);
};

export default Card;
//<h5 className="card-title">{props.cardTitle}</h5> //! süslü parantez açıp yazdırmak istediğimiz keyi yazılır ve parentteki value değer yazdırılır.
				
//! cardTitle key trabzonspor value





/**
 First Class Functions

 const Text = function (){
    console.log("Text First Class");
 }
 
 Text() // fonksiyon çağırma yöntemi

 */