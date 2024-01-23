import React from 'react';

const Page = ({params}) => {
    return ( 
        <div>
            Product İd : {params.id}
        </div>
     );
}

export default Page;