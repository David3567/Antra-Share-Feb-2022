export class AppUserAuth {
    userName = "";
    bearerToken = "";
    isAuthenticated = false;
  
    claim = {
      canAccessProducts: false,
      canAddProducts: false,
      canSaveProduct: false,
      canAccessCategories: false,
      canAddCategory: false,
    };
  }
  