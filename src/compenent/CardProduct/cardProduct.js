import React, { Component } from 'react'

export default class cardProduct extends Component {

    state ={
        days: 0,
        title: ""
    }   

    handlerDaysBerubah = (newvalue) =>{
        this.props.onDaysChange(newvalue);
    }

    handlerTambah = () =>{
        this.setState({
            days: this.state.days+1
        },() =>{
            this.handlerDaysBerubah(this.state.days)
            }
        ) 

    }

    handlerKurang = () =>{

        if(this.state.days >0){
            this.setState({
                days: this.state.days-1
            }, () =>{
                this.handlerDaysBerubah(this.state.days)
            }
            )

        }
    }



    render() {
        return (
            <div>
                <div className="card text-center">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.title}</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary" onClick={this.handlerTambah}>Tambah Hari</a>
                        <a href="#" className="btn btn-primary" onClick={this.handlerKurang}>Kurang Hari</a>
                    </div>
                    <div className="card-footer text-muted">
                        {this.state.days} days ago
                    </div>
                </div>
            </div>
        )
    }
}
