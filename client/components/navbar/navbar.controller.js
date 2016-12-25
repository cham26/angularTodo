'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth, navigationService) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.navigationService = navigationService;
  }

  setProfile() {
    return this.navigationService.goToProfile();
  }
}

angular.module('chamAppApp')
  .controller('NavbarController', NavbarController);
