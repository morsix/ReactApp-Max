import React from 'react';

const withClass = (WrapppedComponent, className) => {
    return props => (
        <div className={className}>
            <WrapppedComponent {...props}/>
        </div>
    );
};

export default withClass;