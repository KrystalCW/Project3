import axios from "axios";

export default {
  // Gets all books
  getItems: function() {
    return axios.get("http://localhost:3001/api/items");
  },
  // Gets the book with the given id
  getItem: function(id) {
    return axios.get("http://localhost:3001/api/items/" + id);
  },
  // Deletes the book with the given id
  deleteItem: function(id) {
    return axios.delete("http://localhost:3001/api/items/" + id);
  },
  // Saves a book to the database
  saveItem: function(itemData) {
    
    return axios.post("http://localhost:3001/api/items", itemData);
  }
};