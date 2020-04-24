import React, { Fragment } from "react";

function Barang(props) {

   return (
      <Fragment>
         <div className="container col-md-12 animated zoomIn" id="containerCard" key={props.id}>
            <div id="cardItem" className="card" style={{ maxWidth: "600px", maxHeight: "300px" }}>
               <div className="row no-gutters">
                  <div className="col-md-4">
                     <img src={props.data.urlBarang} className="card-img" alt="gambar" />
                  </div>
                  <div className="col-md-8">
                     <div className="card-body">
                        <h5 className="card-title">{props.data.namaBarang}</h5>
                        <p className="card-text">Jumlah Barang : {props.data.jumlahBarang}</p>
                        <p className="card-text"><small className="text-muted">Diposting {props.data.createdAt}</small></p>
                        <div id="controlButton">
                           <button onClick={() => { props.hapusList(props.data.id) }} type="button" className="btn btn-black" style={{ color: "white" }}>Hapus</button>
                           <button onClick={(event) => props.handleShow(event, props.data.id)} type="button" className="btn btn-black" style={{ color: "white" }}   >Edit
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </Fragment>
   )
}
export default Barang;