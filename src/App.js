import Header from './compenent/header'
import React, { Component } from 'react'
import Card from './compenent/card'
import Carousel from './compenent/carousel'

export default class App extends Component {
    render() {
        return (
            <div className="container">

                <Header />

                <Carousel gambar ={["https://www.circleone.in/images/products_gallery_images/PVC-Banner.jpg",
                "https://www.circleone.in/images/products_gallery_images/Event-Banners86.jpg",
                "https://www.circleone.in/images/products_gallery_images/Personalised-Banner71.jpg"]} />
                
                <div className="row">

                    <Card title="new brand" deskripsi="ini deskripsi" gambar="https://image.freepik.com/free-psd/fashion-sale-instagram-stories_23-2148822424.jpg" />
                    <Card title="Reira Kitegawa" deskripsi="ini deskripsi" gambar ="https://c.kaskus.id/kaskus_forum_image/d05aee4d347045d70b6038298ae9d3c0.jpg" />
                    <Card title="gintoki" deskripsi="ini deskripsi" gambar ="https://pbs.twimg.com/profile_images/1253980772060377090/wpD3HSZo_400x400.jpg"/>

                </div>
            </div>
        )
    }
}
