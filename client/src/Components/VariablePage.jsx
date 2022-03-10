import React from 'react'
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useParams } from 'react-router-dom'

const VariablePage = () => {
	let { name } = useParams();
	let [desc,setDesc] = useState('');
	let [apiLabel,setApiLabel] = useState(name.toLowerCase());
  return (
    <div className='container mt-5'>
        <div className="row">
			<div className="col-md-3">
				<div className='device_title d-flex'>
						<p style={{ color: "white", fontSize: "1.5rem", alignSelf: "flex-end", paddingLeft: "1rem"}}>{name}</p>
				</div>
				<div style={{backgroundColor: "white",minHeight: "200px",padding: "1rem"}}>
					<h6 style={{color: "rgb(0,0,0,0.5)"}}>Description</h6>
					<input type="text" style={{borderTop: "none",borderRight: "none",borderLeft: "none"}} value={desc} onChange={e => { setDesc(e.target.value) }} placeholder="Change descripton"/>
					<h6 style={{color: "rgb(0,0,0,0.5)"}} className="mt-3">Api Label</h6>
					<input type="text" style={{borderTop: "none",borderRight: "none",borderLeft: "none"}} value={apiLabel} onChange={e => { setApiLabel(e.target.value) }} placeholder={name.toLowerCase()}/>
				</div>
			</div>
			<div className="col-md-9">
				{/* <button type="button" class="btn btn-primary rounded-circle" data-bs-toggle="modal" data-bs-target="#exampleModal">
					<FaPlus />
				</button> */}
				<div className="add-widget mt-5" style={{width: "17rem",height: "12rem"}}>
					<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
						<FaPlus />
					</button>
					Add Variable
					<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title text-center" id="exampleModalLabel">Add Variable</h5>
									<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div class="modal-body">
									<label for="var_name">Variable name</label> <br />
									<input type="text" id="var_name" style={{borderTop: "none",borderLeft: "none", borderRight: "none",borderColor: "rgb(0,0,0,0.3)"}}/> <br />
									<label for="unit" className='mt-3'> Unit </label><br />
									<input type="text" id="unit" style={{borderTop: "none",borderLeft: "none", borderRight: "none",borderColor: "rgb(0,0,0,0.3)"}}/>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-primary">Add Variable</button>
								</div>
							</div>
						</div>
					</div>
				</div>
        	</div>
		</div>
    </div>
  )
}

export default VariablePage