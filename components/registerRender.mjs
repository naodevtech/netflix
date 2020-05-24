export default function registerButtonRender(authentification) {
    console.log(authentification)
    return `<a class="navigation__container-link" href="${authentification}">Register</a>`
    
    // return `<a href="https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://127.0.0.1:5501/#/approved"></a>`

}