const BreadCrumb = ()=>{
    return(
    <div className="row">
        <div className=" container container-md-fluid">
            <div className="col-auto col-md-12">
                <nav aria-label="breadcrumb " className="first d-md-flex">
                    <ol className="breadcrumb indigo lighten-6 first-1 shadow-lg mb-5 ">
                        <li className="breadcrumb-item font-weight-bold"><a className="black-text text-uppercase " href="#"><span>Home</span></a><img className="ml-md-3" src="https://img.icons8.com/offices/30/000000/double-right.png" width="20" height="20"/> </li>
                        <li className="breadcrumb-item font-weight-bold"><a className="black-text text-uppercase" href="#"><span>Sports Items</span></a><img className="ml-md-3" src="https://img.icons8.com/offices/30/000000/double-right.png" width="20" height="20"/></li>
                        <li className="breadcrumb-item font-weight-bold"><a className="black-text text-uppercase " href="#"><span>Shoes</span></a><img className="ml-md-3" src="https://img.icons8.com/offices/30/000000/double-right.png" width="20" height="20"/> </li>
                    </ol> 
                </nav>
            </div>
        </div>
    </div>
    );
};

export default BreadCrumb;