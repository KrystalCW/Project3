import axios from "axios";

export default {
  // Gets all books
  getItems: function() {
    console.log("got here");
    return axios.get("https://mochifinalproject.herokuapp.com/items");
  },
  // Gets the book with the given id
  getItem: function(id) {
    return axios.get("https://mochifinalproject.herokuapp.com/items/" + id);
  },
  // Deletes the book with the given id
  deleteItem: function(id) {
    return axios.delete("https://mochifinalproject.herokuapp.com/items/" + id);
  },
  // Saves a book to the database
  saveItem: function(itemData) {  
    return axios.post("https://mochifinalproject.herokuapp.com/items", itemData);
  },
  updateItem: function(id, itemData) {
    return axios.put("https://mochifinalproject.herokuapp.com/items/" + id + "/", itemData)
  }
};