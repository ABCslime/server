import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:80/api/';

class UserService {

  postItem(item, onUploadProgress,user) {
    let formData = new FormData();
    var header = authHeader()


    formData.append("name", item.name)
    formData.append("price", item.price)
    formData.append("location", item.location)
    formData.append("description", item.description)
    formData.append("image", item.image)
    formData.append("id",user)
    console.log(header)
    return axios.post(API_URL + 'item', formData,
    {
      headers: {"Content-Type": "multipart/form-data",
        header
      },
                onUploadProgress
    });
  }



}
export default new UserService();
