from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/calculate-gst", methods=["POST"])
def calculate_gst():
    data = request.json
    price = float(data["price"])

    gst = price * 0.18
    final_price = price + gst

    return jsonify({
        "original_price": price,
        "gst_amount": round(gst, 2),
        "final_price": round(final_price, 2)
    })

if __name__ == "__main__":
    app.run(debug=True)
