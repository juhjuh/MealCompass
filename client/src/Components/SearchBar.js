import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bulma-components/full';
// import { Section } from "react-bulma-components/full";
import { setCurrentBank } from '../redux/banks/bank.action';  
var axios = require('axios');



//functional component
// passed bank as prop
const SearchBar = ({ bank }) => {

    const [zip, setzip] = useState("")


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!zip) {
            return alert("Please enter a zip-code before searching")
        }

        var data = JSON.stringify({ "zip": zip });

        // call api from backend, gets all banks of zip code
        var config = {
            method: 'post',
            url: 'http://localhost:5000/allbanks',  
            headers: {
                'Content-Type': 'application/json'
            },
            data // data passing to backend, the zip we want to find.. backend must receive 
        };

        await axios(config)
            .then((response) => { // response is all data we receive from backend for our zip
                let collection = response.data.banks   // fetching data and store local
                console.log(response)
                //   collection.reduce()  // accumulator, data
                localStorage.setItem("bank", JSON.stringify(collection)) // we get output in JSON (which cant be stored, so we put it into a string for localstorage)
                // above ^, this is the payload in localstorage

                window.location.reload()
            })
            .catch((error) => {
                console.log(error);
            });
    }




    const clearStorage = () => {
        localStorage.removeItem('bank')
        window.location.reload()
    }





    return (
        <div className="container">
            
            <section>
                <div className="field is-grouped">
                    <p className="control is-expanded">
                        <input className="input" type="text" name="zip" value={zip} onChange={(event) => setzip(event.target.value)} placeholder="Enter your zip code..." required />
                    </p>
                    <p className="control">
                        <button onClick={handleSubmit} className="button is-info" style={{ paddingRight: "10px" }}>
                            Search
                                </button>
                        <button onClick={clearStorage} className="button is-info">
                            Clear Previous Searches
                                </button>
                    </p>
                </div>
                {/* {
                    bank != null ? bank.map(item => { // why?
                        return <h1 key={item._id}>{item.name}</h1>
                    }) :
                        <h1>No searches</h1>

                } */}
<br /><br /><br />
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Street</th>
                            <th>Zip</th>
                            <th>Phone</th>
                            <th>Hours</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr> */}

                        {

                            bank != null ? bank.map(item => {
                                return (
                                    <tr>
                                        {/* <th>1</th> */}
                                        <td key={item._id}>{item.name}</td>
                                        <td key={item._id}>{item.city}</td>
                                        <td key={item._id}>{item.street}</td>
                                        <td key={item._id}>{item.zip}</td>
                                        <td key={item._id}>{item.phone}</td>
                                        <td key={item._id}>{item.hours}</td>
                                        <td key={item._id}>{item.description}</td>
                                    </tr>
                                )
                            }) :
                                <h1>No searches</h1>

                        }
                        {/* </tr> */}
                    </tbody>

                </Table>
            </section>
        </div>
    )
}


const mapStateToProps = (state) => ({
    bank: state.bank.currentBank
})

export default connect(mapStateToProps)(SearchBar)

