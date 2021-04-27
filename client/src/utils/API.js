import axios from "axios";

export default {

    /*------------------ User routes ----------------------------- */
                //references users model + userController

  // Gets all users
    getUsers: function() {
        return axios.get("/api/users");
    },
  // Gets the user with the given id
    getUser: function(id) {
      // console.log("STEP 2 ********************************")
      console.log(id)
        return axios.get("/api/users/" + id);
    },
    //Gets users by unit name
    getUsersByUnit: function(id) {
      // console.log("STEP 2 ###############################")
      console.log(id)
        return axios.get(`/api/users/unit/${id}`);
    },
  // Deletes the user with the given id
    deleteUser: function(id) {
        return axios.delete("/api/users/" + id);
    },
  // Saves a user to the database
    saveUser: function(userData) {
        return axios.post("/api/users", userData);
    },
  // Updates a user
    updateUser: function(id, userData){
      // console.log("STEP 2 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
      // console.log(id)
      // console.log(userData)
      return axios.put("/api/users/" + id, userData);
    },
  

    /*------------------ Course hours routes ----------------------------- */
                //references info model + infoController

  // Gets all Courses
    getCourses: function() {
        return axios.get("/api/info/");
    },
  // Gets the Course with the given id
    getCourse: function(id) {
        return axios.get("/api/info/" + id);
    },
  // Deletes the Course with the given id
    deleteCourse: function(id) {
        return axios.delete("/api/info/" + id);
    },
  // Saves a Course to the database
    saveCourse: function(userData) {
        return axios.post("/api/info", userData);
    }
    
};

