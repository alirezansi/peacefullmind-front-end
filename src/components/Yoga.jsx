import React, { Component } from 'react'
import NewYogaForm from './NewYogaForm.jsx'
import {Link} from 'react-router-dom'
import Navbar from './Navbar.jsx'
import axios from 'axios'
import Footer from './Footer'




let baseURL = process.env.REACT_APP_API_URL + 'api/v1/yogas/' ;
console.log(process.env.REACT_APP_API_URL)



export default class Yoga extends Component {
    state={
        yogas:[],
        newYoga:{
            name: '',
            img:''
        },
        showForm: false
    }


    showForm = (event) =>{
        this.setState({
            showForm : !this.state.showForm 
        })
    }




    componentDidMount() {
        this.findYogas()
    }


    findYogas = () => {
        fetch(baseURL ).then(res => {
            return res.json();
        }).then(data => {
            this.setState({
            yogas : data.data
            });
        });
    }


    addYoga = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post(baseURL , this.state.newYoga)
            const copyYogas = [...this.state.yogas]
            copyYogas.push(response.data)
            this.setState({
                workouts: copyYogas,
                newYoga: {
                    name: '',
                    img:''
                }
            })
        }
        catch (err) {
            console.log(`oh nooooo fucking error`, err)
        }
        this.findYogas()
    }

    handleChange =(event) =>{
        const copyNewYoga = { ...this.state.newYoga }
        copyNewYoga[event.target.id] = event.target.value

        this.setState({
            newYoga: copyNewYoga
        })
    }






render(){
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div className='yogaHeader'>
            </div>
            <div className='yogas'>
                {this.state.yogas.map(yoga=>{
                    return(
                        <div className='yoga' key={yoga.id} >
                            <h2><Link className='linkYoga'  to={`/yogas/${yoga.id}/`}>{yoga.name}</Link></h2>
                            <img className='yogaImg' src={yoga.img} alt='' />
                        </div>
                    )
                })}
            </div>
            <div className='plusShow'>
                <button onClick={(event)=> this.showForm(event)}>+</button>
            </div>
            { this.state.showForm ? 
            
            <div className='yogaForm'>
                <NewYogaForm 
                    newYoga={this.state.newYoga}
                    handleChange={this.handleChange}
                    addYoga={this.addYoga}
                /> 
            </div> : ''
            
            }
            
            <div>
                <Footer />
            </div>



        </div>
    )
    }
}


