import React from 'react';

const Collapse = (props) => {

    console.log(props.children)
	return (
		<div>
			<a className='btn btn-primary' data-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls='collapseExample'>
            Link with href
            </a>
            <div className='collapse' id={props.href}>
            {props.children}
            </div>
		</div>
	);
};

export default Collapse;

// console.log(props.children) card js gelmeye başlar.

{/* <div className='collapse' id="collapseExample">
{Linke tıklandığında açılan içerik} //props.childrene çevrilerek butona basıldığında card çağrılır.
</div>
<div className='collapse' id="collapseExample">
{props.children} 
</div> */}


{/* <a className='btn btn-primary' data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls='collapseExample'>
            Link with href   
            </a> 

            href={"#".concat(props.href)}

butona basıldığında bütün cardlar açılıyor bunun önlenmesi için index js te href atribuite olarak tanımlanır.
        */}