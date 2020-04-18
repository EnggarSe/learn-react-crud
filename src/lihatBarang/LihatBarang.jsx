import React, { Component, Fragment } from 'react';
import './lihatBarang.css';
import { Modal } from 'react-bootstrap';
import Moment from 'moment'

export default class LihatBarang extends Component {
   constructor(props) {
      super(props);
      this.state = {
         show: false,
         namaBarang: '',
         jumlahBarang: '',
         urlBarang: '',
         searchBarang: '',
         index: 0,
         filteredList: null,
      };
   }
   handleShow = (event, index) => {
      // event.preventDefault();
      // merubah nilai state setiap klik edit
      const listBarang = JSON.parse(localStorage.getItem("listBarang"))
      this.setState({
         show: true,
         namaBarang: listBarang[index].namaBarang,
         jumlahBarang: listBarang[index].jumlahBarang,
         urlBarang: listBarang[index].urlBarang,
         index: index,
      });

   }
   handleClose = (event) => {
      // event.preventDefault();
      this.setState({
         show: false,
      });
   }
   handleChange = (event) => {
      event.preventDefault();
      this.setState({
         [event.target.id]: event.target.value,
      });

   }
   handleEdit = (event) => {
      event.preventDefault();
      const listBarang = JSON.parse(localStorage.getItem('listBarang'));

      const editList = {
         namaBarang: this.state.namaBarang,
         jumlahBarang: this.state.jumlahBarang,
         urlBarang: this.state.urlBarang,
         createdAt: Moment().format("MMMM Do YYYY , h:mm:ss a"),
      }
      if (editList.namaBarang === "" || editList.jumlahBarang === "" || editList.urlBarang === "") {
         alert("Inputan Tidak Boleh Kosong");
      }
      else {
         listBarang.splice(this.state.index, 1, editList);
         localStorage.setItem("listBarang", JSON.stringify(listBarang));
         alert("Barang Diedit");
         window.location.reload();
      }


   }
   hapusList = (index) => {
      const confirmBox = window.confirm("Yakin Untuk Hapus Barang ?")
      if (confirmBox === true) {
         const listBarang = JSON.parse(localStorage.getItem('listBarang'));
         listBarang.splice(index, 1);
         window.location.reload();

         localStorage.setItem('listBarang', JSON.stringify(listBarang))
      }
   }
   handleChangeSearch = (event) => {
      event.preventDefault();
      this.setState({
         searchBarang: event.target.value,
      });
      const listBarang = JSON.parse(localStorage.getItem("listBarang"));
      const filterBarang = listBarang.filter((element) => {
         return (
            element.namaBarang
               .toLowerCase()
               .includes(this.state.searchBarang.toLowerCase()) && element
         );
      });

      this.setState({
         filteredList: event.target.value === "" ? "" : filterBarang,
      });
   };
   render() {
      let count = 0;
      // const listBarang = JSON.parse(localStorage.getItem("listBarang"));

      // Search Barang
      const listBarang = Array.isArray(this.state.filteredList)
         ? this.state.filteredList
         : JSON.parse(localStorage.getItem("listBarang"));

      if (listBarang === null) {
         count = 0
      }
      else {
         for (let i = 0; i < listBarang.length; i++) {
            count++
         }
      }

      return (
         <Fragment>
            <h2>Total Item Yang Dimiliki Sebanyak : {count}</h2>
            <hr />
            <div className="md-form mt-3 container" id="inputSearch">
               <input type="text" id="cariBarang" onChange={this.handleChangeSearch} className="form-control" placeholder="Nama Barang" />
            </div>
            <div className="row">
               {Array.isArray(listBarang) &&
                  listBarang.map((element, index) => {
                     return (
                        <div className="container col-md-12 animated zoomIn" id="containerCard" key={index}>
                           <div id="cardItem" className="card" style={{ maxWidth: "600px", maxHeight: "300px" }}>
                              <div className="row no-gutters">
                                 <div className="col-md-4">
                                    <img src={element.urlBarang} className="card-img" alt="gambar" />
                                 </div>
                                 <div className="col-md-8">
                                    <div className="card-body">
                                       <h5 className="card-title">{element.namaBarang}</h5>
                                       <p className="card-text">Jumlah Barang : {element.jumlahBarang}</p>
                                       <p className="card-text"><small className="text-muted">Diposting {element.createdAt}</small></p>
                                       <div id="controlButton">
                                          <button onClick={() => { this.hapusList(index) }} type="button" className="btn btn-black" style={{ color: "white" }}>Hapus</button>
                                          <button onClick={(event) => this.handleShow(event, index)} type="button" className="btn btn-black" style={{ color: "white" }}   >Edit
                                       </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                     <Modal.Title>Edit Item</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     <form onSubmit={this.handleEdit} className="text-center" style={{ color: "#757575" }}>
                        <div className="md-form mt-3">
                           <input type="text" id="namaBarang" className="form-control" onChange={this.handleChange} defaultValue={this.state.namaBarang} placeholder="Nama Barang" />
                        </div>
                        <div className="md-form">
                           <input type="Number" id="jumlahBarang" className="form-control" onChange={this.handleChange} defaultValue={this.state.jumlahBarang} placeholder="Jumlah Barang" />

                        </div>
                        <div className="md-form">
                           <input type="url" id="urlBarang" className="form-control" onChange={this.handleChange} defaultValue={this.state.urlBarang} placeholder="URL Barang" />
                        </div>
                        <button className="btn btn-dark btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Edit Barang</button>
                     </form>
                  </Modal.Body>
               </Modal>
            </div>

         </Fragment>
      )
   }
}