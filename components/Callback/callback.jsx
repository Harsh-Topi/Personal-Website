/*global chrome*/

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
          
        // The ID of the extension we want to talk to.
        var editorExtensionId = "pnfgadelklgelmcpelheicikaiaefalo";

        // Make a simple request:
        chrome.runtime.sendMessage(editorExtensionId, {},
        function(response) {
            console.log(response);
        });
    });
	return (
		<>
            <h1>Logging into Spendy...</h1>
		</>
	);
}

export default Callback;
