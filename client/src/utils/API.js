import axios from "axios";

export default {
  // Gets all books
  getItems: function() {
    return axios.get("/items");
  },
  // Gets the book with the given id
  getItem: function(id) {
    return axios.get("/items/" + id);
  },
  // Deletes the book with the given id
  deleteItem: function(id) {
    return axios.delete("/items/" + id);
  },
  // Saves a book to the database
  saveItem: function(itemData) {  
    return axios.post("/items", itemData);
  },
  updateItem: function(id, itemData) {
    return axios.put("/items/" + id + "/", itemData)
  }
};