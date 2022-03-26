export class AppUser {
  userEmail = '';
  password = '';
}

export class AppUserAuth {
  userName = '';
  bearerToken? = '';
  isAuthenticated = false;
  userRole = '';

}

export class AppUserClaim {
  claimId = '';
  userId = '';
  claimType = '';
  claimValue = '';
}
