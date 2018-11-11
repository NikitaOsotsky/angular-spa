export class AuthService {
  private isLoggedIn = false;

  public isAuth() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }

  private logIn() {
    this.isLoggedIn = true;
  }

  private logOut() {
    this.isLoggedIn = false;
  }
}
