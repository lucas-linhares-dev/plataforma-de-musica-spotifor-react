function Sair(){
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'http://localhost:3000/login'
}

export default Sair;