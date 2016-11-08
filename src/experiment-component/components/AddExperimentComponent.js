import React from 'react';
import {withRouter} from 'react-router';

let NewExperimentComponent = ({router}) => {
    let input;
    let newComponent = false;

    return (
        <form className="col-md-offset-3 col-md-6">
            <input type="text" placeholder="Name" ref={node => input = node}/>
            <button onClick={() => router.push('/')}>
                New Component
            </button>
        </form>
    );
};

const mapStateToProps = (state) => {

};
export default withRouter(NewExperimentComponent);
