import { UserInformation } from '../models/user-information';
export class AppDataService {

    saveUserInformation(userInformation: UserInformation){
        sessionStorage.removeItem('userInformation');
        sessionStorage.setItem('userInformation', JSON.stringify(userInformation));
    }

    getUserInformation(): UserInformation{
        let userInformation = JSON.parse(sessionStorage.getItem('userInformation'));
        if(!userInformation){
            userInformation = new UserInformation();
        }
        return userInformation;
    }
}
