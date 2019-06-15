db.home_inventory.insert({"name": "test", "description":"test", "notes": "test", "scheduled": true, "value": 99.99, "purchasePrice": 199.99, "dateObtained": "20180101", "identificationNumber": 12345, "idNumberType": "test", "quantity": 10})


app.get("/", function(req, res) {
    res.send("Hello world");
});

app.listen(3000, function() {
    console.log("App running on port 3000!");
});