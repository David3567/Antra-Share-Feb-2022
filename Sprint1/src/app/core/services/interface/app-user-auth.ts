export class AppUserAuth {
  userName = "";
  userEmail = "";
  bearerToken? = "";
  isAuthenticated = false;

  claim = {
    canAccessProducts: false,
    canAddProducts: false,
    canSaveProduct: false,
    canAccessCategories: false,
    canAddCategory: false,
  };
}
