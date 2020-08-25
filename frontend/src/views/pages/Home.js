// --------------------------------
//  Define Data Sources
// --------------------------------

let getPostsList = async () => {
     const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`http://127.0.0.1:5082/getData`, options)
        const json = await response.json();
        // console.log(json)
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}

let Home = {
    render : async () => {
        let posts = await getPostsList()
        let view =  /*html*/`
        <section class ="section col-sm-3 leftPane w3-bar-block">
        <div class="block">
            <span class="filter"> FILTER BY </span>
            </div>
            <div class="panel-group" style="border:none">
            <div class="panel panel-default" style="border:none">
              <div class="panel-heading" style="background:transparent" data-toggle="collapse" href="#collapse1" role="button">
                <h4 class="panel-title" style="display:flow-root">
                  <label style="float:left">Collection</label>
                  <i style="float:right" class="fa fa-caret-down"></i>
                </h4>
              </div>
              <div id="collapse1" class="panel-collapse collapse">
              <a href="#" role="button"><div class="panel-body">Set 1</div></a>
              <a href="#" role="button"><div class="panel-footer">Set 2</div></a>
              <a href="#" role="button"><div class="panel-body">Set 3</div></a>
              <a href="#" role="button"><div class="panel-footer">Set 4</div></a>
              </div>
            </div>
          </div> 
          <div class="panel-group" style="border:none">
            <div class="panel panel-default" style="border:none">
              <div class="panel-heading" style="background:transparent" data-toggle="collapse" href="#collapse2" role="button">
                <h4 class="panel-title" style="display:flow-root">
                  <label style="float:left">Colors</label>
                  <i style="float:right" class="fa fa-caret-down"></i>
                </h4>
              </div>
              <div id="collapse2" class="panel-collapse collapse">
              <a href="#" role="button"><div class="panel-body">Color 1</div></a>
              <a href="#" role="button"><div class="panel-footer">Color 2</div></a>
              <a href="#" role="button"><div class="panel-body">Color 3</div></a>
              <a href="#" role="button"><div class="panel-footer">Color 4</div></a>
              </div>
            </div>
          </div> 
          <div class="panel-group" style="border:none">
            <div class="panel panel-default" style="border:none">
              <div class="panel-heading" style="background:transparent" data-toggle="collapse" href="#collapse3" role="button">
                <h4 class="panel-title" style="display:flow-root">
                  <label style="float:left">Category</label>
                  <i style="float:right" class="fa fa-caret-down"></i>
                </h4>
              </div>
              <div id="collapse3" class="panel-collapse collapse">
              <a href="#" role="button"><div class="panel-body">Category 1</div></a>
              <a href="#" role="button"><div class="panel-footer">Category 2</div></a>
              <a href="#" role="button"><div class="panel-body">Category 3</div></a>
              <a href="#" role="button"><div class="panel-footer">Category 4</div></a>
              </div>
            </div>
          </div> 
          <div style="    padding: 10px 15px;">
          <label for="amount">Price range:</label>
          
          <div id="slider-range" style="margin-top:25px"></div>
          <div display="inline" style="margin-top: 15px;font-size: 12px;">
          <input type="text" id="amountLow" value="$1300" readonly style="width: 6em;border:0; color:#b1afaf; font-weight:bold;float:left">
          <input type="text" id="amountHigh" value="$10000+" readonly style="text-align: end;width: 6em;border:0; color:#b1afaf; font-weight:bold;float:right">
           </div>
           </div></section>
            <section class="section col-sm-9 rightPane">
            ${ posts.map(post => 
                `<a href="#/p/${post.id}">
                <div class="product col-sm-3">
                <img src="./assets/sofaImg.jpeg" class="ProductImg"/>
                <div class="priceCard">
                <span style="float:right; text-align:end"><span class="price">${post.price}</span><br>
                
                <i style="font-size:20px" class="fa fa-shopping-cart"></i></span>
                </div>
                <div class="detailsCard">
                <span ><span class="productName">${post.name}</span><br><span class="categoryName">${post.category}</span><br><br>
                ${[...Array(post.stars).keys()].map(star => `<i class="fa fa-star"></i>`).join('')}${[...Array(5-post.stars).keys()].map(star => `<i class="fa fa-star-o"></i>`).join('')}
                </span>
                </div>
                </div> </a>`
                ).join('\n ')
            }
               
               
            </section>
        `
        return view
    }
    , after_render: async () => {
        $( function() {
            $( "#slider-range" ).slider({
              range: true,
              min: 0,
              max: 10000,
              values: [ 1380, 10000 ],
              slide: function( event, ui ) {
                $( "#amountLow" ).val( "$" + ui.values[ 0 ]);
                $( "#amountHigh" ).val( "$" + ui.values[ 1 ]);

                // $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
              }
            });
            $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
              " - $" + $( "#slider-range" ).slider( "values", 1 ) );
              $("#slider-range").css("height", "0");
              $(".ui-slider-handle").css("border-radius","50%");
              $(".ui-slider-handle").css("margin-top","-5px");  
              $(".ui-slider-handle").css("border","solid 1.5px black");  
          } );
    }

}


export default Home;
{/* <h1> Home </h1>
                <ul>
                    ${ posts.map(post => 
                        `<li><a href="#/p/${post.id}">${post.title}</a></li>`
                        ).join('\n ')
                    }
                </ul> */}