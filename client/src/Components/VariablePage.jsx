import React from 'react'
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom'
import { addUnit, addVariable, removeVariable } from '../action';
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from 'react-icons/md';
import { GrFormPreviousLink } from 'react-icons/gr'

const VariablePage = () => {
	let { name,id } = useParams();
	let dispatch = useDispatch();
	let [desc,setDesc] = useState('');
	let [varName,setVarName] = useState('');
	let [unitName,setUnitName] = useState('');
	let [apiLabel,setApiLabel] = useState(name.toLowerCase());
	let arr = [...Array(10).keys()];
	let variables = useSelector( state => state.showDevices );
	console.log(variables); 
  return (
	<>
	<Link to="/devices"> 
		<GrFormPreviousLink style={{ backgroundColor: "rgb(54, 179, 236)", color: "white", fontSize: "2rem",cursor: "pointer" }} className="rounded-circle mt-2 mx-2"/>
	</Link>
    <div className='container mt-5'>
        <div className="row">
			<div className="col-md-3">
				<div className='device_title d-flex'>
						<p style={{ color: "white", fontSize: "1.5rem", alignSelf: "flex-end", paddingLeft: "1rem"}}>{name}</p>
				</div>
				<div style={{backgroundColor: "white",minHeight: "200px",padding: "1rem"}}>
					<h6 style={{color: "rgb(0,0,0,0.5)"}}>Description</h6>
					<input type="text" style={{borderTop: "none",borderRight: "none",borderLeft: "none"}}
					 value={desc} onChange={e => { setDesc(e.target.value) }} placeholder="Change descripton"/>
					<h6 style={{color: "rgb(0,0,0,0.5)"}} className="mt-3">Api Label</h6>
					<input type="text" style={{borderTop: "none",borderRight: "none",borderLeft: "none"}}
					 value={apiLabel} onChange={e => { setApiLabel(e.target.value) }} placeholder={name.toLowerCase()}/>
				</div>
			</div>
			<div className="col-md-9 d-flex flex-wrap justify-content-evenly">
				{/* <button type="button" class="btn btn-primary rounded-circle" data-bs-toggle="modal" data-bs-target="#exampleModal">
					<FaPlus />
				</button> */}
				{ variables[id].var_names !== undefined ? arr.map( (val) => 
				{   return val >= variables[id].var_names.length ? null : 
					<div className="card my-5 " style={{minWidth: "18rem",minHeight: "12rem"}}>
						<a href="#" style={{ textDecoration: "none"}}>
							<div className='device_titl d-flex'>
								<p style={{ color: "white", fontSize: "1.5rem", alignSelf: "flex-end", paddingLeft: "1rem"}}>
									{variables[id].var_names[val]}
								</p>
							</div>
						</a>
						<div className="card-body">
							<div> 
								<span className="card-text" style={{color: "rgb(0,0,0,0.5)"}}>Unit</span>
								<MdDelete style={{ fontSize: "2rem",color: "rgb(0,0,0,.5)", marginLeft: "10rem" }} 
								onClick={ () => { dispatch( removeVariable(val,id) )} } />
							</div>
								{variables[id].var_units[val]}
						</div>
					</div> 
				 } ) : 	null
				}
				<div className="add-widget mt-5" style={{width: "17rem",height: "12rem"}}>
					<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
						<FaPlus />
					</button>
						Add Variable
					<div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title text-center" id="exampleModalLabel">Add Variable</h5>
									<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div class="modal-body">
									<label htmlFor="var_name">Variable name</label> <br />
									<input type="text" id="var_name" value={varName} onChange={e => { setVarName(e.target.value) } } 
									style={{borderTop: "none",borderLeft: "none", borderRight: "none",borderColor: "rgb(0,0,0,0.3)"}}/> <br />
									<label htmlFor="unit" className='mt-3'> Unit </label><br />
									<input type="text" id="unit" value={unitName} onChange={e => { setUnitName(e.target.value) } } 
									style={{borderTop: "none",borderLeft: "none", borderRight: "none",borderColor: "rgb(0,0,0,0.3)"}}/>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => { 
										dispatch( addVariable(varName,id) );
										dispatch( addUnit(unitName,id)) }}>
										Add Variable
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
        	</div>
		</div>
    </div>
	</>
  )
}

export default VariablePage