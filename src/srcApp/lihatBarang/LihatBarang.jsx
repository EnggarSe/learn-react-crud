import React, { Component, Fragment } from 'react';
import './lihatBarang.css';
import { Modal } from 'react-bootstrap';
import Moment from 'moment'
import Barang from '../lihatBarang/Barang';


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
         listBarang : [],
      };
   }
   showBarang = async () => {
      const urlBarang =  `https://5e9fca5511b078001679cd41.mockapi.io/barang`
      const response = await fetch(urlBarang);
      const result = await response.json();
      const user = JSON.parse(localStorage.getItem('userData'))
      const filter = result.filter((element) =>{
          return element.userId === user.id && element 
      })
      this.setState({
         listBarang : filter,
      })
   }
   handleShow = (event,element) => {
      event.preventDefault();
      let currentItem = this.state.listBarang.find((list)=> list.id === element);
      console.log(currentItem.namaBarang, "listbarang");
      this.setState({
         show: true,
         namaBarang: currentItem.namaBarang,
         jumlahBarang: currentItem.jumlahBarang,
         urlBarang: currentItem.urlBarang,
         index: element,
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
   handleEdit = async(event) => {
      event.preventDefault();
      const urlBarang =  `https://5e9fca5511b078001679cd41.mockapi.io/barang/${this.state.index}`
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
         await fetch(urlBarang,{
            method : 'PUT',
            headers : {
                  'Content-Type' : 'application/json'
            },
            body : JSON.stringify(editList),
         });

         this.showBarang();
         this.setState({
            show : false,
         })
      }
   }
   hapusList = async(elementid) => {
      const urlBarang =  `https://5e9fca5511b078001679cd41.mockapi.io/barang/${elementid}`
      const confirmBox = window.confirm("Yakin Untuk Hapus Barang ?")
      if (confirmBox === true) {
        await fetch(urlBarang, {
           method : 'DELETE'
        });
        this.showBarang();
        
      }
   }
   handleChangeSearch = (event) => {
      event.preventDefault();
      this.setState({
         searchBarang: event.target.value,
      });      
      const listBarang = this.state.listBarang;
      if (listBarang === null) {
         alert("Search List Under Maintanance");
         window.location.reload();
      }
      else {
         const filterBarang = listBarang.filter((element) => {
            return (
               element.namaBarang
                  .toLowerCase()
                  .includes(this.state.searchBarang.toLowerCase()) && element
            );
         });
         console.log(filterBarang, "filter");
         

         this.setState({
            filteredList: event.target.value === "" ? "" : filterBarang,
         });

      }
   };
   componentDidMount = async() => {
      this.showBarang();
   }
   render() {
      const listBarang = Array.isArray(this.state.filteredList)
         ? this.state.filteredList
         : this.state.listBarang
      return (
         <Fragment>
            <div ref={this.wrapper}>
               
            </div>
            <h2>Total Item Yang Dimiliki Sebanyak : {this.state.listBarang.length}</h2>
            <hr />
            <div className="md-form mt-3 container" id="inputSearch">
               <input type="text" id="cariBarang" onChange={this.handleChangeSearch} className="form-control" placeholder="Nama Barang" />
            </div>
            <div className="row">
               {Array.isArray(listBarang) &&
                  listBarang.map((element, index) => {
                     return (
                        <Barang key = {element.id} id = {element.id} data = {element} hapusList = {this.hapusList} handleShow = {this.handleShow}  />
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