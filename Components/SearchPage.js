import { Fragment } from "react";
const SearchPage =()=>{
    
    return(
        <Fragment>
            <div className="md-8">
            <div className=" container1 container-md-fluid 'col-md-4'">
            <div className="cardse mt-5 p-4">
                <div className="input-group"> <input type="text" className="form-control"/>
                    <div className="input-group-append"><button className="btn">Search</button></div>
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
    );
};

export default SearchPage;
