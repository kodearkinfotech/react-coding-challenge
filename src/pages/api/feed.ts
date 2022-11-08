import jsonData from "../../../feed/sample.json";
export default function handler(req, res) {
  res.status(200).json(jsonData);
}
