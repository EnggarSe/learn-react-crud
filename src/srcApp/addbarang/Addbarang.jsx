import React, { Component, Fragment } from 'react';
import './addBarang.css';
import Moment from 'moment';
export default class Addbarang extends Component {
   constructor(props) {
      super(props);
      this.state = {
         namaBarang: '',
         jumlahBarang: '',
         urlBarang: '',
      };
   }
   handleChange = (event) => {
      event.preventDefault();
      this.setState({
         [event.target.id]: event.target.value,
      });

   }

   handleSubmit = async(event) => {
      event.preventDefault();
      const userId = JSON.parse(localStorage.getItem("userData"))
      const id = userId.id;
      const urlBarang = `https://5e9fca5511b078001679cd41.mockapi.io/barang`;
      const list = {
         namaBarang: this.state.namaBarang,
         jumlahBarang: this.state.jumlahBarang,
         urlBarang: this.state.urlBarang,
         createdAt: Moment().format("MMMM Do YYYY , h:mm:ss a"),
         userId: id,
      }
      if (list.namaBarang === "" || list.jumlahBarang === "" || list.urlBarang === "") {
         alert("Inputan Tidak Boleh Kosong");
      }
      else {
         const response = await fetch(urlBarang,{ 
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(list),
            method: 'POST'
         });
         await response.json();
         window.location.reload();
      }
   }
   render() {
      return (
         <Fragment>
            <div className="container col-md-6 animated slideInUp" id="containerBarang">
               <div className="card">
                  <h5 className="card-header info-color white-text text-center py-4">
                     <strong>Tambah Barangg</strong>
                  </h5>
                  <div className="card-body px-lg-5 pt-0">
                     <form onSubmit={this.handleSubmit} className="text-center" style={{ color: "#757575" }}>
                        <div className="md-form mt-3">
                           <input type="text" id="namaBarang" className="form-control" onChange={this.handleChange} placeholder="Nama Barang" />
                        </div>
                        <div className="md-form">
                           <input type="Number" id="jumlahBarang" className="form-control" onChange={this.handleChange} placeholder="Jumlah Barang" />

                        </div>
                        <div className="md-form">
                           <input type="url" id="urlBarang" className="form-control" onChange={this.handleChange} placeholder="Url Gambar Barang" />
                        </div>
                        <button className="btn btn-dark btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Tambahkan</button>
                     </form>
                  </div>
               </div>
            </div>
         </Fragment>
      )
   }
}