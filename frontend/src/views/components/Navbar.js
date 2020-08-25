let Navbar = {
    render: async () => {
        let view =  /*html*/`
        <div class="row header">
        <img src="../../assets/logo.png" height="50px"/>
    <ul>
      <li><a href="#"  (role)="button">HOME</a></li>
      <li><a href="#/shop">SHOP</a></li>
      <li><a href="#/magazine">MAGAZINE</a></li>
      <li style="float:right">
        <div class="leftNav">
          <i class="fa fa-search"></i>
        <input type="text" placeholder="Search.." name="search">
        <a href="#/login" class="login"><span >LOGIN</span></a>
        <a href="#/cart" style="margin-right: 40px;float:right;padding: 0;font-size: 25px;"><i class="fa fa-shopping-cart" ></i></a>
        </div>
        
        </li>
    </ul>
      </div>
        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;