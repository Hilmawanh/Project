import React, { useEffect, useState } from 'react';
import { FaRegWindowMinimize } from "react-icons/fa";
import Axios from 'axios'
import { APIURL, APIURLimage } from '../helper/apiurl'
import { Link } from 'react-router-dom'

function MenuBmx() {

  const [dataBmx, setGetDataProduk] = useState([])

  useEffect(() => {
    Axios.get(`${APIURL}admin/get-prod`)
      .then(res => {
        setGetDataProduk(res.data.dataBmx)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const renderProduk = () => {
    return dataBmx.map((val, index) => {
      return (
        <div className="card">
          <Link to={'/menu-details/' + val.id}>
            <img src={APIURLimage + val.gambar} style={{ width: "100%" }} />
          </Link>
          <div className="container">
            <h4 className="MenuDailyNamaProduk">
              <b>{val.produk}</b>
            </h4>
            <center>
              <p>{val.deskripsi}</p>
            </center>
            <center>
              <h5 className="CardTextPrice">Rp.{val.harga}</h5>
            </center>
          </div>
        </div>
      )
    })
  }


  return (
    <div>
      <img
        src="https://images.pexels.com/photos/1580234/pexels-photo-1580234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        style={{ width: "100%", height: "30pc" }}
      />
      <div style={{ display: "column" }}>
        <h2 className="CardTextHeader">RAZOR</h2>
        <FaRegWindowMinimize className="StripBmx1" />
        <div style={{ display: "flex" }}>
          {renderProduk()}
        </div>
      </div>
    </div>
  )
}

export default MenuBmx;