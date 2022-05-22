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
          
          var editorExtensionId = "pnfgadelklgelmcpelheicikaiaefalo";

        // chrome.runtime.connect(editorExtensionId);
        // The ID of the extension we want to talk to.

        // Make a simple request:
        chrome.runtime.sendMessage(editorExtensionId, {dangus: 'dingus'});
    });
	return (
		<>
            <h1>Logging into Spendy...</h1>
		</>
	);
}

export default Callback;
