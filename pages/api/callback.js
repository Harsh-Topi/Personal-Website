/*global chrome*/
export default function callback(req, res) {
    res.status(200).json({ name: 'John Doe' })
}