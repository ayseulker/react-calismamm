import React from 'react';

const Collapse = (props) => {

    console.log(props.children)
	return (
		<div>
			<a className='btn btn-primary w-100' data-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls='collapseExample'>
            Link with href
            </a>
            <div className='collapse show' id={props.href}>
            {props.children}
            </div>
		</div>
	);
};

export default Collapse;

//<div className='collapse show'  diyerek kartların açık şekilde gözükmesi sağlanıyor

// console.log(props.children) card js gelmeye başlar.

/* {<div className='collapse' id="collapseExample">
{Linke tıklandığında açılan içerik} //props.childrene çevrilerek butona basıldığında card çağrılır.
</div>
<div className='collapse' id="collapseExample">
{props.children} 
</div>} */


/* {<a className='btn btn-primary' data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls='collapseExample'>
            Link with href   
            </a> 

            href={"#".concat(props.href)}

butona basıldığında bütün cardlar açılıyor bunun önlenmesi için index js te href atribuite olarak tanımlanır.
       } */

//  <a className='btn btn-primary w-100' = w-100 diyerek genişliğin tamamını al demek için koyuyuruz