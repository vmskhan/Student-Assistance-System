import React from 'react'
import Feature from '../Feature';


export const Notes = () => {
    return (
        <div className='Notes'>
            <div>
                <h1>NOTES</h1>

                <div className="input-group">
                    <div className="form-outline">
                        <input type="search" id="form1" class="form-control" />
                        <label className="form-label" for="form1">Search</label>
                    </div>
                    <br />
                    <button type="button" class="btn btn-primary">
                        <i className="fas fa-search"></i>
                    </button>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Data Science using R</h5>
                                    <p className="card-text">UNITS:1-5</p>
                                    <a href="#" className="btn btn-primary">OPEN</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Distributed System</h5>
                                    <p className="card-text">UNIT:1-5</p>
                                    <a href="#" className="btn btn-primary">OPEN</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes;