export function validUsername(username) {
    let regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    return regex.test(username)
}
export function validPassword (pw) {
    let regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/g;
    return regex.test(pw)
}

export function validSignup(state) {
    let { username, password, password2, nickname, checkUsername } = state;
    return (username !== "" && password !== "" && password === password2 && nickname !== "" && checkUsername);
}

export function validSignin(state) {
    let { username, password } = state;
    return (username !== "" && password !== "");
}

export function validAlbumRegister(state) {
    let { thumbnail, title, category, genre, created, content, music_list } = state;
    return (
        thumbnail != null && title !== "" && category !== "" && 
        genre !== "" && created !== "" && content !== "" && music_list.length != 0 
    )
}

export function validPolice(value) {
    return value !== ''
}