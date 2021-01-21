import React, { Component } from 'react'

export default class carousel extends Component {

    constructor(props){
        super()
        this.props = props

    }

    render() {
        return (
            
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                 <div className="carousel-inner">

                    {
                        this.props.gambar.map((gambar,index) => {

                            

                           let statusCss =""
                            if(index ===0 ){
                                statusCss = "carousel-item active"
                            }else{
                                statusCss = "carousel-item"
                            }


                            return <div className={statusCss} key={index}>
                                <img src={gambar} className="d-block w-100" alt=""/>
                                </div>
                                
                        })
                            

                    }
                </div>
                
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}
