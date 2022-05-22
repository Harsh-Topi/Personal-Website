import React, { useEffect } from 'react';

function Callback() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log('You are on the browser')
            // ✅ Can use window here
          } else {
            console.log('You are on the server')
            // ⛔️ Don't use window here
          }
          
          var data = { type: "FROM_PAGE", text: "Hello from the webpage!" };
          window.postMessage(data, "*");
    });
	return (
		<>
            <h1>Logging into Spendy...</h1>
		</>
	);
}

export default Callback;
