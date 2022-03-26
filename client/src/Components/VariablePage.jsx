import React, { useEffect,useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom'
import { addUnit, addVariable, removeVariable } from '../action';
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from 'react-icons/md';
import { GrFormPreviousLink } from 'react-icons/gr'
import axios from 'axios';

const VariablePage = () => {
	let { name,id } = useParams();
	let dispatch = useDispatch();
	let [desc,setDesc] = useState('');
	let [varName,setVarName] = useState('');
	let [unitName,setUnitName] = useState('');
	let [variables,setVariables] = useState();
	let [apiLabel,setApiLabel] = useState(name.toLowerCase());
	let arr = [...Array(10).keys()];
	
	useEffect(async () => {
		let res = await axios.post('/api/getVariables',{ id });
		setVariables(res.data);
	},[variables])

  return (
	<>
	{/* <Link to="/devices"> 
		<GrFormPreviousLink style={{ backgroundColor: "rgb(54, 179, 236)", color: "white", fontSize: "2rem",cursor: "pointer" }} className="rounded-circle mt-2 mx-2"/>
	</Link> */}
    <div className='container' style={{ "margin": "6rem" }}> 
        <div className="row">
			<div className="col-md-3">
				<div className='device_title d-flex'>
						<p style={{ color: "white", fontSize: "1.5rem", alignSelf: "flex-end", paddingLeft: "1rem"}}>{name}</p>
				</div>
				<div style={{backgroundColor: "white",height: "30rem",padding: "1rem"}}>
					<h6 style={{color: "rgb(0,0,0,0.5)"}} className="mt-4">Description</h6>
					<input type="text" style={{borderTop: "none",borderRight: "none",borderLeft: "none"}}
					 value={desc} onChange={e => { setDesc(e.target.value) }} placeholder="Change descripton"/>

					<h6 style={{color: "rgb(0,0,0,0.5)"}} className="mt-4">API Label</h6>
					<input type="text" style={{borderTop: "none",borderRight: "none",borderLeft: "none"}}
					 value={apiLabel} onChange={e => { setApiLabel(e.target.value) }} placeholder={name.toLowerCase()} />

					<h6 style={{color: "rgb(0,0,0,0.5)"}} className="mt-4">ID</h6>
					<input type="text" style={{borderTop: "none",borderRight: "none",borderLeft: "none"}}
					 value={ id } onChange={e => { }} placeholder={name.toLowerCase()} />

					<div className="d-flex justify-content-between align-items-center my-4">
						<h6 style={{color: "rgb(0,0,0,0.5)"}} >Mode</h6>
						<select class="form-select" aria-label="Default select example" style={{"width": "40%"}}>
							<option selected>Auto</option>
							<option value="1">Manual</option>
							<option value="2">new-variable</option>
						</select>
					</div>

					<h6 style={{color: "rgb(0,0,0,0.5)"}} className="mt-4">Latitude</h6>
					<h6 style={{color: "rgb(0,0,0,0.5)"}} className="mt-4">Longitude</h6>
				</div>
			</div>
			<div className="col-md-9 d-flex flex-wrap justify-content-evenly">
				{ variables !== undefined ? arr.map( (val,i) => 
				{   return val >= variables.var_names.length ? null : 
					<div className="card my-5 " style={{width: "18rem",height: "13rem"}} key={i}>
						<a href="#" style={{ textDecoration: "none"}}>
							<div className='device_titl d-flex'>
								<p style={{ color: "white", fontSize: "1.5rem", alignSelf: "flex-end", paddingLeft: "1rem"}}>
									{variables.var_names[val]}
								</p>
							</div>
						</a>
						<div className="card-body">
							<div> 
								<span className="card-text" style={{color: "rgb(0,0,0,0.5)"}}>Unit</span>
								<MdDelete style={{ fontSize: "2rem",color: "rgb(0,0,0,.5)", marginLeft: "11rem" }} 
								onClick={ async() => { 
									let var_name = variables.var_names[val];
									let unit_name = variables.var_units[val];
									let res = await axios.post('/api/deleteVariable', { var_name,unit_name,id });
								} } />
							</div>
							<p style={{ "color": "rgb(0,0,0,0.7)" }} > {variables.var_units[val]} </p>
						</div>
					</div> 
				 } ) : 	null
				}
				<div className="add-widget mt-5" style={{width: "17rem",height: "13rem"}}>
					<button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
						<FaPlus />
					</button>
						Add Variable
					<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title text-center" id="exampleModalLabel">Add Variable</h5>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
									<label htmlFor="var_name">Variable name</label> <br />
									<input type="text" id="var_name" value={varName} onChange={e => { setVarName(e.target.value) } } 
									style={{borderTop: "none",borderLeft: "none", borderRight: "none",borderColor: "rgb(0,0,0,0.3)"}}/> <br />
									<label htmlFor="unit" className='mt-3'> Unit </label><br />
									<input type="text" id="unit" value={unitName} onChange={e => { setUnitName(e.target.value) } } 
									style={{borderTop: "none",borderLeft: "none", borderRight: "none",borderColor: "rgb(0,0,0,0.3)"}}/>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={async() => { 
										let res = await axios.post('/api/addVariable', {varName,unitName,id});
										}}>
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