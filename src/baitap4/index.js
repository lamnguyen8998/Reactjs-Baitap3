import React, { Component } from 'react'

export default class ListsFilms extends Component {
    constructor(props){
        super(props);
        this.state ={
            listFilms:[
                {
                    "maPhim": 1283,
                    "tenPhim": "Trainwreck",
                    "biDanh": "trainwreck",
                    "trailer": "https://www.youtube.com/embed/2MxnhBPoIx4",
                    "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
                    "moTa": "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
                    "maNhom": "GP00",
                    "ngayKhoiChieu": "2019-07-29T00:00:00",
                    "danhGia": 5
                  },
                  {
                    "maPhim": 1284,
                    "tenPhim": "Inside Out",
                    "biDanh": "inside-out",
                    "trailer": "https://www.youtube.com/embed/seMwpP0yeu4",
                    "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/insideout.jpg",
                    "moTa": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
                    "maNhom": "GP00",
                    "ngayKhoiChieu": "2019-07-29T00:00:00",
                    "danhGia": 5
                  },
                  {
                    "maPhim": 1285,
                    "tenPhim": "Home",
                    "biDanh": "home",
                    "trailer": "https://www.youtube.com/embed/MyqZf8LiWvM",
                    "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/home.jpg",
                    "moTa": "Oh, an alien on the run from his own people, lands on Earth and makes friends with the adventurous Tip, who is on a quest of her own.",
                    "maNhom": "GP00",
                    "ngayKhoiChieu": "2019-07-29T00:00:00",
                    "danhGia": 5
                  },
                  {
                    "maPhim": 1286,
                    "tenPhim": "Batman v Superman: Dawn of Justice",
                    "biDanh": "batman-v-superman-dawn-of-justice",
                    "trailer": "https://www.youtube.com/embed/0WWzgGyAH6Y",
                    "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/batmanvssuperman.jpg",
                    "moTa": "Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.",
                    "maNhom": "GP00",
                    "ngayKhoiChieu": "2019-07-29T00:00:00",
                    "danhGia": 5
                  },
                  {
                    "maPhim": 1287,
                    "tenPhim": "Ant-Man",
                    "biDanh": "ant-man",
                    "trailer": "https://www.youtube.com/embed/1HpZevFifuo",
                    "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/antman.jpg",
                    "moTa": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
                    "maNhom": "GP00",
                    "ngayKhoiChieu": "2019-07-29T00:00:00",
                    "danhGia": 5
                  },
                  {
                    "maPhim": 1288,
                    "tenPhim": "Jurassic World",
                    "biDanh": "jurassic-world",
                    "trailer": "https://www.youtube.com/embed/RFinNxS5KN4",
                    "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/jurassicworld.jpg",
                    "moTa": "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
                    "maNhom": "GP00",
                    "ngayKhoiChieu": "2019-07-29T00:00:00",
                    "danhGia": 5
                  }
            ],
        };
    }
    renderFilms = () => {
        const {listFilms} = this.state;
       return listFilms.map((maPhim)=>{
            return(
              

                <div key={maPhim} className="card mx-3 my-3 " style={{width: '18rem'}}>
               <a href={maPhim.trailer}> <img className="card-img-top" src={maPhim.hinhAnh} alt="Card image" style={{maxWidth: '100%', height: 250}} /></a>
  <div className="card-body ">
    <h5 className="card-title">{maPhim.tenPhim}</h5>
    <p className="card-text">{maPhim.moTa}</p>
  </div>
</div>





            );
        });   
        
    }


    render() {
        return (
            <div>
                <h3>
                    *ListsFilms
                </h3>
                
                <div className="row container">
                   
                   {this.renderFilms()}
                 

                 </div>
                  
                   
                    
               
                
            </div>
        )
    }
}
