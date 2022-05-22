export default function callback(req, res) {
    var data = { type: "FROM_PAGE", text: "Hello from the webpage!" };
    window.postMessage(data, "*");
    res.status(200).json({ name: 'John Doe' })
}