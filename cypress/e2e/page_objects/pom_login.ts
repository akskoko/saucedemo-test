const loginPage = {
  txtHomeTitle: '//div[contains(text(),"Swag Labs")]',
  txbEmail: '//input[@placeholder="Username"]',
  txbPassword: '//input[@placeholder="Password"]',
  btnLogin: '//input[@id="login-button"]',
  btnLogout: '//a[contains(text(),"Logout")]',
  btnMenu: '//button[contains(text(),"Open Menu")]',
  errorLockedAccount: '//h3[contains(text(),"Epic sadface: Sorry, this user has been locked out.")]',
  errorMissingUsername: '//h3[contains(text(),"Username is required")]',
  errorMissingPassword: '//h3[contains(text(),"Password is required")]',
  errorWrongCredential: '//h3[contains(text(),"Username and password do not match any user in this service")]'
};

export default loginPage;
