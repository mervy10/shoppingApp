import Utils        from './../../services/Utils.js'

let getPost = async (id) => {
    const options = {
       method: 'POST',
       body: id,
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`http://127.0.0.1:5082/getSingleItem`, options)
       const json = await response.json();
       console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}


        let imgSrc1 = "../assets/chairProfile/chair1.jpg"
        let imgSrc2 = "../assets/chairProfile/char2.jpg"
        let imgSrc3 = "../assets/chairProfile/chair3.jpg"
let PostShow = {
    

    render : async () => {
        let request = Utils.parseRequestURL()
        let post = await getPost(request.id)
        

        return /*html*/`
            <section class="section" style="margin-top:-2vh">
            <div class="container profileMain">
            <div class="profileImg">
            <div style="margin-left: 12.5%; margin-top: 2%;">
            <img id="myImg" src=${imgSrc1} style="height:400px;"/>
            </div>
            <div class="thumbNailWrapper">
            <img src=${imgSrc1} id="thumb1"  class="thumbNail active1" role="button" style="height:80px;width:80px"/>
            <img src=${imgSrc2} id="thumb2" class="thumbNail"  style="height:80px;width:80px"/>
            <img src=${imgSrc3} id="thumb3" class="thumbNail" style="height:80px;width:80px"/>

            </div>
            </div>
            <div class="centralZone">
            <div style="    height: 10vh;
            width: 5vw;
            background: #ffe3c0;
            border-radius: 4px;
            text-align: center;">
            <span >
            <i style="margin-top: 2vh;font-size: 40px;" class="fa fa-arrow-right"></i>
            </span>
            </div>
            </div>
            <div class="detailZone">
            <span style="    margin-bottom: 0px;
            color: #868080;
            font-weight: bold;font-size: 12px;">${post.category}</span>
            
            <h1 style="    margin-top: 0px;
            margin-bottom: 25px;">${post.name}</h1>
            
            <p style="height:30vh;overflow:auto">${post.description}</p>
            
            <span style="    margin-bottom: 0px;
            color: #868080;
            font-weight: bold;font-size: 12px;">Colors:</span><br>
            <div style="display: inline-block; margin-top: 6px;">
            <div style="height:20px;width:20px;background:black; border-radius:50%;float:left;margin-left:10px"></div>
            <div style="height:20px;width:20px;background:brown; border-radius:50%;float:left;margin-left:10px"></div>
            </div>
            <br>
            <div style="display:flex">
            <div style="float:left>
            <span style="margin-bottom: 0px; color: #868080;font-weight: bold;font-size: 12px;">Price per unit</span><br>
            <h2 >${post.price}</h2>
            </div>
            <button style="height: 10vh;
            margin-left: 3vw;
            width: 10vw;
            background: #17434a;
            font-size: 20px;
            color: white;"> Buy Now</button>
            <a href="#/cart" style="    margin-left: 3vw;
            padding: 0;
            font-size: 50px;"><i class="fa fa-shopping-cart" ></i></a>

            </div>
            
            </div>
            </div>
              
            </section>
           
        `
    }
    , after_render: async () => {
        document.getElementById("thumb1").addEventListener ("click",  () => {
            $(".thumbNail").removeClass('active1');
            $("#thumb1").addClass('active1');
            document.getElementById("myImg").src = imgSrc1;
        });
        document.getElementById("thumb2").addEventListener ("click",  () => {
            $(".thumbNail").removeClass('active1');
            $("#thumb2").addClass('active1');
            document.getElementById("myImg").src = imgSrc2;
        });
        document.getElementById("thumb3").addEventListener ("click",  () => {
            $(".thumbNail").removeClass('active1');
            $("#thumb3").addClass('active1');
            document.getElementById("myImg").src = imgSrc1;
        })
    }
    
    
    
    
    

}


export default PostShow;

{/* <h1> Post Id : ${post.id}</h1>
                <p> Post Title : ${post.title} </p>
                <p> Post Content : ${post.content} </p>
                <p> Post Author : ${post.name} </p> */}